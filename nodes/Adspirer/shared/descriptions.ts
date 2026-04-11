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
		{
			name: 'Meta Ads',
			value: 'metaAds',
		},
	],
	default: 'googleAds',
	description: 'The advertising platform to use',
};

export const authenticationSelect: INodeProperties = {
	displayName: 'Authentication',
	name: 'authentication',
	type: 'options',
	options: [
		{
			name: 'OAuth2 (Recommended)',
			value: 'oAuth2',
			description: 'Connect your Adspirer account via OAuth2 — no keys to manage',
		},
		{
			name: 'API Key',
			value: 'apiKey',
			description: 'Use an API key from your Adspirer settings',
		},
	],
	default: 'oAuth2',
};
