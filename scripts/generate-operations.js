#!/usr/bin/env node
/**
 * Fetches https://api.adspirer.ai/openapi.json and emits
 * nodes/Adspirer/generated/tools.ts — a typed metadata array used by
 * every resources/*.ts file to render the n8n operation dropdown + fields.
 *
 * Run:
 *   node scripts/generate-operations.js
 *   OR:
 *   node scripts/generate-operations.js --from=./spec/openapi.json
 */

const fs = require('node:fs');
const path = require('node:path');

const OPENAPI_URL = 'https://api.adspirer.ai/openapi.json';
const OUT_FILE = path.join(__dirname, '..', 'nodes', 'Adspirer', 'generated', 'tools.ts');
const CACHE_FILE = path.join(__dirname, '..', 'spec', 'openapi.json');

const TAG_TO_PLATFORM = {
	'google-ads': 'googleAds',
	'meta-ads': 'metaAds',
	'linkedin-ads': 'linkedinAds',
	'tiktok-ads': 'tiktokAds',
	monitoring: 'utility',
	general: 'utility',
	audit: 'utility',
};

const SUPPORTED_PRIMITIVE_TYPES = new Set(['string', 'integer', 'number', 'boolean']);

function unwrapType(spec) {
	if (!spec) return { type: 'unknown', nullable: false };
	if (spec.type) return { type: spec.type, nullable: false };
	if (Array.isArray(spec.anyOf)) {
		const nonNull = spec.anyOf.find((b) => b.type && b.type !== 'null');
		const hasNull = spec.anyOf.some((b) => b.type === 'null');
		return { type: nonNull?.type ?? 'unknown', nullable: hasNull };
	}
	return { type: 'unknown', nullable: false };
}

function cleanDescription(desc) {
	if (!desc) return '';
	// Strip the LLM-oriented 🚨 quota-error preambles that front most summaries.
	let s = desc.replace(/^🚨[\s\S]*?(?:\n\n|$)/g, '').trim();
	// Take just the first sentence or first 140 chars, whichever is shorter.
	const firstSentence = s.split(/(?<=[.!?])\s/)[0] ?? s;
	s = firstSentence.length <= 160 ? firstSentence : s.slice(0, 160) + '…';
	return s.replace(/\s+/g, ' ').trim();
}

function titleize(snake) {
	return snake
		.split('_')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

function toOperationId(toolName) {
	// list_campaigns → listCampaigns
	return toolName.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

async function loadSpec(fromPath) {
	if (fromPath) {
		console.log(`Loading OpenAPI from ${fromPath}`);
		return JSON.parse(fs.readFileSync(fromPath, 'utf8'));
	}
	console.log(`Fetching OpenAPI from ${OPENAPI_URL}`);
	const res = await fetch(OPENAPI_URL);
	if (!res.ok) throw new Error(`OpenAPI fetch failed: ${res.status}`);
	const spec = await res.json();
	// Cache for reproducibility.
	fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
	fs.writeFileSync(CACHE_FILE, JSON.stringify(spec, null, 2));
	return spec;
}

function extractTool(toolName, pathEntry) {
	const op = pathEntry.post;
	if (!op) return null;

	const tag = (op.tags ?? [])[0] ?? 'general';
	const platform = TAG_TO_PLATFORM[tag] ?? 'utility';

	const argsSchema =
		op.requestBody?.content?.['application/json']?.schema?.properties?.arguments ?? {};
	const props = argsSchema.properties ?? {};
	const required = new Set(argsSchema.required ?? []);

	const args = [];
	let skipReason = null;

	for (const [argName, argSpec] of Object.entries(props)) {
		const { type } = unwrapType(argSpec);
		if (!SUPPORTED_PRIMITIVE_TYPES.has(type)) {
			skipReason = `arg "${argName}" has unsupported type "${type}"`;
			break;
		}
		args.push({
			name: argName,
			title: argSpec.title ?? titleize(argName),
			type,
			required: required.has(argName),
			description: cleanDescription(argSpec.description ?? ''),
			...(argSpec.default !== undefined && argSpec.default !== null
				? { default: argSpec.default }
				: {}),
			...(Array.isArray(argSpec.enum) ? { enum: argSpec.enum } : {}),
		});
	}

	return {
		name: toolName,
		platform,
		operationId: toOperationId(toolName),
		displayName: titleize(toolName),
		description: cleanDescription(op.summary ?? op.description ?? toolName),
		readOnly: op['x-adspirer-read-only'] === true,
		destructive: op['x-adspirer-destructive'] === true,
		args: skipReason ? [] : args,
		...(skipReason ? { skipped: skipReason } : {}),
	};
}

function renderTS(tools) {
	return `// GENERATED FILE — DO NOT EDIT BY HAND.
// Regenerate via: node scripts/generate-operations.js

export type ToolArgType = 'string' | 'integer' | 'number' | 'boolean';

export interface ToolArg {
	name: string;
	title: string;
	type: ToolArgType;
	required: boolean;
	description: string;
	default?: string | number | boolean;
	enum?: string[];
}

export interface ToolMeta {
	name: string;
	platform: 'googleAds' | 'metaAds' | 'linkedinAds' | 'tiktokAds' | 'utility';
	operationId: string;
	displayName: string;
	description: string;
	readOnly: boolean;
	destructive: boolean;
	args: ToolArg[];
	skipped?: string;
}

export const TOOLS: ToolMeta[] = ${JSON.stringify(tools, null, 2)};
`;
}

async function main() {
	const fromArg = process.argv.find((a) => a.startsWith('--from='));
	const fromPath = fromArg ? fromArg.slice('--from='.length) : null;

	const spec = await loadSpec(fromPath);
	const paths = spec.paths ?? {};
	const tools = [];

	for (const [p, entry] of Object.entries(paths)) {
		if (!p.startsWith('/api/v1/tools/') || !p.endsWith('/execute')) continue;
		const toolName = p.replace('/api/v1/tools/', '').replace('/execute', '');
		const meta = extractTool(toolName, entry);
		if (meta) tools.push(meta);
	}

	tools.sort((a, b) => (a.platform + a.name).localeCompare(b.platform + b.name));

	fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
	fs.writeFileSync(OUT_FILE, renderTS(tools));

	// Stats
	const byPlatform = {};
	let skipped = 0;
	for (const t of tools) {
		byPlatform[t.platform] = (byPlatform[t.platform] ?? { total: 0, skipped: 0 });
		byPlatform[t.platform].total++;
		if (t.skipped) {
			byPlatform[t.platform].skipped++;
			skipped++;
		}
	}
	console.log(`\nWrote ${tools.length} tools → ${path.relative(process.cwd(), OUT_FILE)}`);
	for (const [plat, s] of Object.entries(byPlatform)) {
		console.log(`  ${plat.padEnd(12)} ${s.total - s.skipped}/${s.total} expose-able (${s.skipped} skipped)`);
	}
	console.log(`  total       ${tools.length - skipped}/${tools.length} expose-able\n`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
