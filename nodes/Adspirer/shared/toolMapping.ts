import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Maps n8n UI operation keys to REST API tool names.
 * Format: "platform.operation" → "tool_name"
 */
export const TOOL_NAME_MAP: Record<string, string> = {
	'googleAds.listCampaigns': 'list_campaigns',
};

/**
 * Write operations require an Idempotency-Key header.
 * Detected by tool name prefix.
 */
export function isWriteTool(toolName: string): boolean {
	return /^(create_|add_|update_|upload_|delete_|pause_|enable_|remove_)/.test(toolName);
}

/**
 * Builds REST tool arguments from n8n node parameters.
 * Only includes parameters that have non-empty values.
 */
export function buildToolArguments(
	context: IExecuteFunctions,
	itemIndex: number,
	platform: string,
	operation: string,
): Record<string, unknown> {
	const args: Record<string, unknown> = {};

	const getParam = (name: string): unknown => {
		try {
			const value = context.getNodeParameter(name, itemIndex);
			if (value === '' || value === undefined || value === null) return undefined;
			return value;
		} catch {
			return undefined;
		}
	};

	if (platform === 'googleAds' && operation === 'listCampaigns') {
		const customerId = getParam('customer_id');
		if (customerId !== undefined) args.customer_id = customerId;

		const statusFilter = getParam('status_filter');
		if (statusFilter !== undefined) args.status_filter = statusFilter;
	}

	return args;
}
