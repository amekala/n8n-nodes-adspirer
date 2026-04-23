import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { TOOLS, type ToolMeta, type ToolArg } from '../generated/tools';

type Platform = ToolMeta['platform'];

const PLATFORM_LABELS: Record<Platform, string> = {
	googleAds: 'Google Ads',
	metaAds: 'Meta Ads',
	linkedinAds: 'LinkedIn Ads',
	tiktokAds: 'TikTok Ads',
	utility: 'Utility',
};

export const PLATFORMS: Platform[] = Object.keys(PLATFORM_LABELS) as Platform[];

export function getExposableTools(platform: Platform): ToolMeta[] {
	return TOOLS.filter((t) => t.platform === platform && !t.skipped).sort((a, b) =>
		a.displayName.localeCompare(b.displayName),
	);
}

export function buildPlatformSelect(): INodeProperties {
	return {
		displayName: 'Platform',
		name: 'platform',
		type: 'options',
		noDataExpression: true,
		options: PLATFORMS.map((p) => ({ name: PLATFORM_LABELS[p], value: p })),
		default: 'googleAds',
		description: 'The advertising platform to use',
	};
}

export function buildOperationsForPlatform(platform: Platform): INodeProperties[] {
	const tools = getExposableTools(platform);
	if (tools.length === 0) return [];

	const options: INodePropertyOptions[] = tools.map((t) => ({
		name: t.displayName,
		value: t.operationId,
		action: t.displayName,
		description: t.description,
	}));

	return [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: { show: { platform: [platform] } },
			options,
			default: '',
		},
	];
}

function argToProperty(platform: Platform, operationId: string, arg: ToolArg): INodeProperties {
	const base: INodeProperties = {
		displayName: arg.title,
		name: arg.name,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				platform: [platform],
				operation: [operationId],
			},
		},
		...(arg.description ? { description: arg.description } : {}),
	};

	if (arg.required) base.required = true;

	if (arg.enum && arg.enum.length > 0) {
		base.type = 'options';
		base.options = arg.enum.map((v) => ({ name: String(v), value: v }));
		base.default = arg.default ?? arg.enum[0];
		return base;
	}

	switch (arg.type) {
		case 'boolean':
			base.type = 'boolean';
			base.default = typeof arg.default === 'boolean' ? arg.default : false;
			break;
		case 'integer':
		case 'number':
			base.type = 'number';
			base.default = typeof arg.default === 'number' ? arg.default : 0;
			if (!arg.required) {
				// allow empty so optional numerics can be omitted
				base.default = '';
				base.type = 'string';
				base.placeholder = 'e.g. 30';
				base.description =
					(base.description ?? '') + ' (numeric — leave blank to omit)'.trim();
			}
			break;
		case 'string':
		default:
			base.type = 'string';
			base.default = typeof arg.default === 'string' ? arg.default : '';
			break;
	}
	return base;
}

export function buildFieldsForPlatform(platform: Platform): INodeProperties[] {
	const fields: INodeProperties[] = [];
	for (const tool of getExposableTools(platform)) {
		for (const arg of tool.args) {
			fields.push(argToProperty(platform, tool.operationId, arg));
		}
	}
	return fields;
}

export function findTool(platform: Platform, operationId: string): ToolMeta | undefined {
	return TOOLS.find((t) => t.platform === platform && t.operationId === operationId);
}
