import type { INodeProperties } from 'n8n-workflow';

export const platformSelect: INodeProperties = {
	displayName: 'Platform',
	name: 'platform',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Google Ads',
			value: 'googleAds',
		},
	],
	default: 'googleAds',
	description: 'The advertising platform to use',
};
