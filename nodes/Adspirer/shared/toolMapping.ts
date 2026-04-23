import type { IExecuteFunctions } from 'n8n-workflow';
import { findTool } from './build-properties';
import type { ToolMeta } from '../generated/tools';

/**
 * Resolve the underlying REST tool name from the n8n UI selection.
 * Returns the tool metadata so callers can also read read-only/destructive flags.
 */
export function resolveTool(platform: string, operationId: string): ToolMeta | undefined {
	return findTool(platform as ToolMeta['platform'], operationId);
}

/**
 * A tool is a "write" operation if it's not read-only. Destructive implies write.
 * Used to decide whether to send an Idempotency-Key header.
 */
export function isWriteTool(tool: ToolMeta): boolean {
	return !tool.readOnly;
}

/**
 * Build the REST API's `arguments` payload from n8n's UI parameters.
 * Only includes values the user actually filled in.
 */
export function buildToolArguments(
	context: IExecuteFunctions,
	itemIndex: number,
	tool: ToolMeta,
): Record<string, unknown> {
	const args: Record<string, unknown> = {};

	for (const arg of tool.args) {
		let value: unknown;
		try {
			value = context.getNodeParameter(arg.name, itemIndex);
		} catch {
			continue;
		}

		if (value === '' || value === undefined || value === null) {
			if (arg.required) {
				// let the server throw a clear 400 — better than us guessing
				continue;
			}
			continue;
		}

		// Coerce numeric fields that we forced to string (optional numerics)
		if ((arg.type === 'integer' || arg.type === 'number') && typeof value === 'string') {
			const n = Number(value);
			if (Number.isNaN(n)) continue;
			value = arg.type === 'integer' ? Math.trunc(n) : n;
		}

		args[arg.name] = value;
	}

	return args;
}
