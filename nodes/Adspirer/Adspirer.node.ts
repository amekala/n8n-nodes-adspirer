import {
	NodeConnectionTypes,
	NodeOperationError,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { authenticationSelect, platformSelect } from './shared/descriptions';
import { googleAdsOperations, googleAdsFields } from './resources/googleAds';
import { metaAdsOperations, metaAdsFields } from './resources/metaAds';
import { TOOL_NAME_MAP, buildToolArguments } from './shared/toolMapping';

export class Adspirer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Adspirer',
		name: 'adspirer',
		icon: { light: 'file:adspirer.svg', dark: 'file:adspirer.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle:
			'={{$parameter["platform"] === "googleAds" ? "Google Ads" : "Meta Ads"}} — {{$parameter["operation"]}}',
		description:
			'Manage ad campaigns across Google Ads and Meta Ads — performance analysis, keyword research, budget optimization, and campaign creation',
		defaults: {
			name: 'Adspirer',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'adspireOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: ['oAuth2'],
					},
				},
			},
			{
				name: 'adspireApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['apiKey'],
					},
				},
			},
		],
		properties: [
			authenticationSelect,
			platformSelect,
			...googleAdsOperations,
			...metaAdsOperations,
			...googleAdsFields,
			...metaAdsFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const platform = this.getNodeParameter('platform', i) as string;
			const operation = this.getNodeParameter('operation', i) as string;
			const authentication = this.getNodeParameter('authentication', i) as string;

			// Map UI operation to MCP tool name
			const toolKey = `${platform}.${operation}`;
			const toolName = TOOL_NAME_MAP[toolKey];

			if (!toolName) {
				throw new NodeOperationError(this.getNode(), `Unknown operation: ${platform}.${operation}`);
			}

			// Build tool arguments from node parameters
			const toolArguments = buildToolArguments(this, i, platform, operation);

			// Build MCP JSON-RPC request
			const rpcBody = {
				jsonrpc: '2.0',
				id: `n8n-${Date.now()}-${i}`,
				method: 'tools/call',
				params: {
					name: toolName,
					arguments: toolArguments,
				},
			};

			// Determine credential type
			const credentialType =
				authentication === 'oAuth2' ? 'adspireOAuth2Api' : 'adspireApi';

			// Call MCP server
			const response = await this.helpers.httpRequestWithAuthentication.call(
				this,
				credentialType,
				{
					method: 'POST',
					url: 'https://mcp.adspirer.com/mcp',
					body: rpcBody,
					json: true,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json, text/event-stream',
					},
				},
			);

			// Parse MCP response
			const result = response.result ?? response;
			const contentItems = result.content ?? [];
			const contentText =
				contentItems
					.filter((c: { type: string }) => c.type === 'text')
					.map((c: { text: string }) => c.text)
					.join('\n') || '';
			const isError = result.isError === true;

			returnData.push({
				json: {
					success: !isError,
					platform,
					operation,
					tool: toolName,
					content: contentText,
				},
			});
		}

		return [returnData];
	}
}
