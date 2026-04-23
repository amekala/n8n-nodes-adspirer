import type { INodeProperties } from 'n8n-workflow';

const showForGoogleAds = { platform: ['googleAds'] };

export const googleAdsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showForGoogleAds },
		options: [
			{
				name: 'List Campaigns',
				value: 'listCampaigns',
				action: 'List all google ads campaigns',
				description: 'Return all campaigns on the account with status and type',
			},
		],
		default: 'listCampaigns',
	},
];

export const googleAdsFields: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customer_id',
		type: 'string',
		default: '',
		placeholder: '1234567890',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['listCampaigns'],
			},
		},
		description:
			'Optional Google Ads customer ID. Leave blank to use your default connected account.',
	},
	{
		displayName: 'Status Filter',
		name: 'status_filter',
		type: 'options',
		options: [
			{ name: 'All', value: '' },
			{ name: 'Enabled Only', value: 'ENABLED' },
			{ name: 'Paused Only', value: 'PAUSED' },
			{ name: 'Removed Only', value: 'REMOVED' },
		],
		default: '',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['listCampaigns'],
			},
		},
		description: 'Filter campaigns by status',
	},
];
