import type { INodeProperties } from 'n8n-workflow';

const showForMetaAds = { platform: ['metaAds'] };

export const metaAdsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showForMetaAds },
		options: [
			{
				name: 'Ad Performance',
				value: 'adPerformance',
				action: 'Analyze meta ad creative performance',
				description:
					'Analyze individual ad and creative performance with fatigue detection',
			},
			{
				name: 'Audience Insights',
				value: 'audienceInsights',
				action: 'Get meta ads audience insights',
				description:
					'Get audience demographics, placement analysis, and targeting insights',
			},
			{
				name: 'Campaign Performance',
				value: 'campaignPerformance',
				action: 'Analyze meta ads campaign performance',
				description: 'Get performance metrics for Meta ad campaigns',
			},
			{
				name: 'List Campaigns',
				value: 'listCampaigns',
				action: 'List all meta ads campaigns',
				description: 'Get a list of all Meta campaigns with status',
			},
			{
				name: 'Wasted Spend Analysis',
				value: 'wastedSpend',
				action: 'Analyze wasted meta ads spend',
				description:
					'Identify wasted Meta ad spend with placement and fatigue analysis',
			},
		],
		default: 'campaignPerformance',
	},
];

export const metaAdsFields: INodeProperties[] = [
	// Lookback days
	{
		displayName: 'Lookback Days',
		name: 'lookback_days',
		type: 'options',
		options: [
			{ name: '7 Days', value: 7 },
			{ name: '30 Days', value: 30 },
			{ name: '60 Days', value: 60 },
			{ name: '90 Days', value: 90 },
		],
		default: 30,
		description: 'Number of days to look back for analysis',
		displayOptions: {
			show: {
				platform: ['metaAds'],
				operation: [
					'campaignPerformance',
					'adPerformance',
					'audienceInsights',
					'wastedSpend',
				],
			},
		},
	},

	// Ad Account ID — optional override
	{
		displayName: 'Ad Account ID',
		name: 'ad_account_id',
		type: 'string',
		default: '',
		description:
			'Meta Ads account ID (optional — uses primary account if not specified)',
		displayOptions: {
			show: {
				platform: ['metaAds'],
			},
		},
	},

	// Wasted spend: target ROAS
	{
		displayName: 'Target ROAS',
		name: 'target_roas',
		type: 'number',
		default: 3,
		description: 'Target return on ad spend for optimization recommendations',
		displayOptions: {
			show: {
				platform: ['metaAds'],
				operation: ['wastedSpend'],
			},
		},
	},

	// List campaigns: status filter
	{
		displayName: 'Status Filter',
		name: 'status_filter',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Active', value: 'active' },
			{ name: 'Paused', value: 'paused' },
		],
		default: 'all',
		description: 'Filter campaigns by status',
		displayOptions: {
			show: {
				platform: ['metaAds'],
				operation: ['listCampaigns'],
			},
		},
	},
];
