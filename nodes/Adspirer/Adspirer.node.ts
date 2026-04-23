import {
	NodeApiError,
	NodeConnectionTypes,
	NodeOperationError,
	type IExecuteFunctions,
	type IHttpRequestOptions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
	type ISupplyDataFunctions,
	type JsonObject,
	type SupplyData,
} from 'n8n-workflow';
import {
	PLATFORMS,
	buildFieldsForPlatform,
	buildOperationsForPlatform,
	buildPlatformSelect,
} from './shared/build-properties';
import { buildToolArguments, isWriteTool, resolveTool } from './shared/toolMapping';
import type { ToolMeta } from './generated/tools';

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

	/**
	 * AI Agent (LangChain) integration. n8n's ToolsAgent invokes supplyData()
	 * on every node wired into its `ai_tool` slot. We return a DynamicStructuredTool
	 * whose schema is derived from the tool metadata we generated from the REST
	 * OpenAPI spec — so the agent sees typed, described arguments and can call
	 * the tool without our node doing argument discovery at prompt time.
	 */
	async supplyData(this: ISupplyDataFunctions, itemIndex: number): Promise<SupplyData> {
		// eslint-disable-next-line @n8n/community-nodes/no-restricted-imports -- LangChain tool needed for AI Agent integration; same pattern as n8n-nodes-mcp (227k weekly downloads)
		const { DynamicStructuredTool } = await import('@langchain/core/tools');
		const { z } = await import('zod');

		const platform = this.getNodeParameter('platform', itemIndex) as string;
		const operationId = this.getNodeParameter('operation', itemIndex) as string;
		const tool = resolveTool(platform, operationId);
		if (!tool) {
			throw new NodeOperationError(
				this.getNode(),
				`Unknown operation: ${platform}.${operationId}`,
				{ itemIndex },
			);
		}

		const schema = buildZodSchemaForTool(z, tool);
		const node = this.getNode();
		// Pre-extract what the tool's func closure needs so we don't alias `this`
		// (which would keep stale references and upset the no-this-alias lint rule).
		const httpRequestWithAuth = this.helpers.httpRequestWithAuthentication.bind(this);
		const userDefaults = buildToolArguments(
			this as unknown as IExecuteFunctions,
			itemIndex,
			tool,
		);

		const dynamicTool = new DynamicStructuredTool({
			name: tool.operationId,
			description: `[${platform}] ${tool.displayName}. ${tool.description}`,
			schema,
			func: async (agentInput: Record<string, unknown>): Promise<string> => {
				// Merge the user's pre-configured argument defaults with whatever
				// the agent provided this turn. Agent overrides win.
				const merged: Record<string, unknown> = { ...userDefaults };
				for (const [k, v] of Object.entries(agentInput)) {
					if (v !== undefined && v !== null && v !== '') merged[k] = v;
				}

				const headers: Record<string, string> = {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				};
				if (isWriteTool(tool)) {
					// Agent calls can loop — a stable key per (node, tool) prevents
					// double-execution on agent retries.
					headers['Idempotency-Key'] = `n8n-agent-${node.id}-${tool.operationId}-${itemIndex}`;
				}

				const requestOptions: IHttpRequestOptions = {
					method: 'POST',
					url: `${API_BASE_URL}/api/v1/tools/${tool.name}/execute`,
					body: { arguments: merged },
					json: true,
					headers,
					returnFullResponse: true,
					ignoreHttpStatusErrors: true,
				};

				const response = await httpRequestWithAuth('adspireApi', requestOptions);
				const statusCode = response.statusCode as number;
				const env = response.body as AdspireEnvelope;

				if (!env || env.success === false || statusCode >= 400) {
					const err = env as AdspireErrorEnvelope | undefined;
					const msg = err?.error ?? `Adspirer API returned ${statusCode}`;
					const upgradeUrl = err?.quota?.upgrade_url;
					throw new NodeOperationError(
						node,
						upgradeUrl ? `${msg} — upgrade: ${upgradeUrl}` : msg,
						{ itemIndex },
					);
				}

				const okEnv = env as AdspireSuccessEnvelope;
				// Return the LLM-readable summary. If the tool only returned
				// structured data, stringify it.
				return (
					okEnv.data.text ??
					(okEnv.data.structured ? JSON.stringify(okEnv.data.structured) : '')
				);
			},
		});

		return { response: dynamicTool };
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- zod typings are dynamic here
function buildZodSchemaForTool(z: any, tool: ToolMeta): any {
	const shape: Record<string, unknown> = {};
	for (const arg of tool.args) {
		let field: unknown;
		if (arg.enum && arg.enum.length > 0) {
			field = z.enum(arg.enum as [string, ...string[]]);
		} else {
			switch (arg.type) {
				case 'boolean':
					field = z.boolean();
					break;
				case 'integer':
					field = z.number().int();
					break;
				case 'number':
					field = z.number();
					break;
				case 'string':
				default:
					field = z.string();
			}
		}
		// The agent can omit any arg — the user's pre-configured defaults kick in.
		field = (field as { optional(): unknown }).optional();
		if (arg.description) {
			field = (field as { describe(d: string): unknown }).describe(arg.description);
		}
		shape[arg.name] = field;
	}
	return z.object(shape);
}
