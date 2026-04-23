import {
	NodeApiError,
	NodeConnectionTypes,
	NodeOperationError,
	type IExecuteFunctions,
	type IHttpRequestOptions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
	type JsonObject,
} from 'n8n-workflow';
import {
	PLATFORMS,
	buildFieldsForPlatform,
	buildOperationsForPlatform,
	buildPlatformSelect,
} from './shared/build-properties';
import { buildToolArguments, isWriteTool, resolveTool } from './shared/toolMapping';

const API_BASE_URL = 'https://api.adspirer.ai';

interface AdspireSuccessEnvelope {
	success: true;
	tool: string;
	data: {
		text?: string;
		structured?: unknown;
		quota?: {
			tier?: string;
			used?: number;
			limit?: number;
			period_end?: string;
			upgrade_url?: string;
		};
	};
}

interface AdspireErrorEnvelope {
	success: false;
	is_error?: boolean;
	error: string;
	tool?: string;
	quota?: { upgrade_url?: string };
}

type AdspireEnvelope = AdspireSuccessEnvelope | AdspireErrorEnvelope;

const platformSelect = buildPlatformSelect();
const operationSelects = PLATFORMS.flatMap(buildOperationsForPlatform);
const fieldDefinitions = PLATFORMS.flatMap(buildFieldsForPlatform);

export class Adspirer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Adspirer',
		name: 'adspirer',
		icon: { light: 'file:adspirer.svg', dark: 'file:adspirer.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["platform"] + " — " + $parameter["operation"]}}',
		description:
			'Manage ad campaigns across Google, Meta, LinkedIn & TikTok Ads via the Adspirer REST API',
		defaults: {
			name: 'Adspirer',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'adspireApi',
				required: true,
			},
		],
		properties: [platformSelect, ...operationSelects, ...fieldDefinitions],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const workflowExecId = this.getExecutionId();

		for (let i = 0; i < items.length; i++) {
			const platform = this.getNodeParameter('platform', i) as string;
			const operationId = this.getNodeParameter('operation', i) as string;

			const tool = resolveTool(platform, operationId);
			if (!tool) {
				throw new NodeOperationError(
					this.getNode(),
					`Unknown operation: ${platform}.${operationId}`,
					{ itemIndex: i },
				);
			}

			const toolArguments = buildToolArguments(this, i, tool);

			const headers: Record<string, string> = {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			};
			if (isWriteTool(tool)) {
				headers['Idempotency-Key'] = `n8n-${workflowExecId}-${i}`;
			}

			const requestOptions: IHttpRequestOptions = {
				method: 'POST',
				url: `${API_BASE_URL}/api/v1/tools/${tool.name}/execute`,
				body: { arguments: toolArguments },
				json: true,
				headers,
				returnFullResponse: true,
				ignoreHttpStatusErrors: true,
			};

			const response = await this.helpers.httpRequestWithAuthentication.call(
				this,
				'adspireApi',
				requestOptions,
			);
			const statusCode = response.statusCode as number;
			const envelope = response.body as AdspireEnvelope;

			if (!envelope) {
				throw new NodeOperationError(this.getNode(), 'Empty response from Adspirer API', {
					itemIndex: i,
				});
			}

			if (statusCode === 402) {
				const upgradeUrl = (envelope as AdspireErrorEnvelope).quota?.upgrade_url;
				const message =
					((envelope as AdspireErrorEnvelope).error ??
						'Adspirer quota exhausted for this billing period') +
					(upgradeUrl ? ` — upgrade at ${upgradeUrl}` : '');
				throw new NodeApiError(this.getNode(), envelope as unknown as JsonObject, {
					message,
					itemIndex: i,
					httpCode: '402',
				});
			}

			if (statusCode === 401) {
				throw new NodeApiError(this.getNode(), envelope as unknown as JsonObject, {
					message:
						'Invalid or missing Adspirer API key. Generate a new key at https://adspirer.ai/keys.',
					itemIndex: i,
					httpCode: '401',
				});
			}

			if (statusCode >= 400 || envelope.success === false) {
				const errMessage =
					(envelope as AdspireErrorEnvelope).error ?? `Adspirer API error (${statusCode})`;
				throw new NodeApiError(this.getNode(), envelope as unknown as JsonObject, {
					message: errMessage,
					itemIndex: i,
					httpCode: String(statusCode),
				});
			}

			const success = envelope as AdspireSuccessEnvelope;
			returnData.push({
				json: {
					success: true,
					platform,
					operation: operationId,
					tool: tool.name,
					text: success.data.text ?? '',
					structured: success.data.structured ?? null,
					_adspirer_quota: success.data.quota ?? null,
				},
			});
		}

		return [returnData];
	}
}
