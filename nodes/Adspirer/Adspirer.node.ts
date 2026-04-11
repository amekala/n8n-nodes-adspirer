import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authenticationSelect, platformSelect } from './shared/descriptions';
import { googleAdsOperations, googleAdsFields } from './resources/googleAds';
import { metaAdsOperations, metaAdsFields } from './resources/metaAds';

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
		requestDefaults: {
			baseURL: 'https://mcp.adspirer.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			authenticationSelect,
			platformSelect,
			...googleAdsOperations,
			...metaAdsOperations,
			...googleAdsFields,
			...metaAdsFields,
		],
	};
}
