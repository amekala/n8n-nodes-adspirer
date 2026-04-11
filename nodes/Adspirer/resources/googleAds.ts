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
				name: 'Budget Optimization',
				value: 'budgetOptimization',
				action: 'Get google ads budget recommendations',
				description: 'Get budget allocation and optimization recommendations',
			},
			{
				name: 'Campaign Performance',
				value: 'campaignPerformance',
				action: 'Analyze google ads campaign performance',
				description: 'Get performance metrics for all campaigns over a date range',
			},
			{
				name: 'Create PMax Campaign',
				value: 'createPmaxCampaign',
				action: 'Create a google performance max campaign',
				description: 'Create a new Performance Max campaign with assets',
			},
			{
				name: 'Create Search Campaign',
				value: 'createSearchCampaign',
				action: 'Create a google search campaign',
				description: 'Create a new Google Search campaign with keywords and ads',
			},
			{
				name: 'Keyword Research',
				value: 'keywordResearch',
				action: 'Research google ads keywords',
				description: 'Research keywords with CPC, search volume, and competition data',
			},
			{
				name: 'List Campaigns',
				value: 'listCampaigns',
				action: 'List all google ads campaigns',
				description: 'Get a list of all campaigns with status and type',
			},
			{
				name: 'Search Terms Analysis',
				value: 'searchTerms',
				action: 'Analyze google ads search terms',
				description:
					'Analyze search term performance and find negative keyword opportunities',
			},
			{
				name: 'Wasted Spend Analysis',
				value: 'wastedSpend',
				action: 'Analyze wasted google ads spend',
				description: 'Identify wasted ad spend and get optimization recommendations',
			},
		],
		default: 'campaignPerformance',
	},
];

export const googleAdsFields: INodeProperties[] = [
	// Lookback days — used by performance, wasted spend, budget optimization, search terms
	{
		displayName: 'Lookback Days',
		name: 'lookback_days',
		type: 'options',
		options: [
			{ name: '7 Days', value: 7 },
			{ name: '30 Days', value: 30 },
			{ name: '60 Days', value: 60 },
			{ name: '90 Days', value: 90 },
			{ name: '120 Days', value: 120 },
		],
		default: 30,
		description: 'Number of days to look back for analysis',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: [
					'campaignPerformance',
					'wastedSpend',
					'budgetOptimization',
					'searchTerms',
				],
			},
		},
	},

	// Customer ID — optional override for multi-account users
	{
		displayName: 'Customer ID',
		name: 'customer_id',
		type: 'string',
		default: '',
		description:
			'Google Ads customer ID (optional — uses primary account if not specified)',
		displayOptions: {
			show: {
				platform: ['googleAds'],
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
			{ name: 'Enabled', value: 'enabled' },
			{ name: 'Paused', value: 'paused' },
		],
		default: 'all',
		description: 'Filter campaigns by status',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['listCampaigns'],
			},
		},
	},

	// Wasted spend / budget optimization: target ROAS
	{
		displayName: 'Target ROAS',
		name: 'target_roas',
		type: 'number',
		default: 3,
		description: 'Target return on ad spend for optimization recommendations',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['wastedSpend', 'budgetOptimization'],
			},
		},
	},

	// Budget optimization: total budget
	{
		displayName: 'Total Budget (USD)',
		name: 'total_budget',
		type: 'number',
		default: 0,
		description: 'Total budget to allocate across campaigns (0 = use current total)',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['budgetOptimization'],
			},
		},
	},

	// Keyword research fields
	{
		displayName: 'Keywords',
		name: 'keywords',
		type: 'string',
		default: '',
		description: 'Comma-separated list of seed keywords to research',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['keywordResearch'],
			},
		},
		required: true,
	},
	{
		displayName: 'Business Description',
		name: 'business_description',
		type: 'string',
		default: '',
		description: 'Brief description of the business for keyword context',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['keywordResearch'],
			},
		},
	},
	{
		displayName: 'Landing Page URL',
		name: 'landing_page_url',
		type: 'string',
		default: '',
		description: 'Landing page URL for keyword suggestions',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['keywordResearch'],
			},
		},
	},

	// Create search campaign fields
	{
		displayName: 'Campaign Name',
		name: 'campaign_name',
		type: 'string',
		default: '',
		description: 'Name for the new campaign',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['createSearchCampaign'],
			},
		},
		required: true,
	},
	{
		displayName: 'Daily Budget (USD)',
		name: 'daily_budget',
		type: 'number',
		default: 20,
		description: 'Daily budget in USD',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['createSearchCampaign', 'createPmaxCampaign'],
			},
		},
		required: true,
	},
	{
		displayName: 'Campaign Keywords',
		name: 'campaign_keywords',
		type: 'string',
		default: '',
		description: 'Comma-separated keywords for the campaign',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['createSearchCampaign'],
			},
		},
		required: true,
	},
	{
		displayName: 'Target Locations',
		name: 'target_locations',
		type: 'string',
		default: 'United States',
		description: 'Comma-separated target locations (e.g., "United States, Canada")',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['createSearchCampaign', 'createPmaxCampaign'],
			},
		},
	},
	{
		displayName: 'Final URL',
		name: 'final_url',
		type: 'string',
		default: '',
		description: 'Landing page URL for the ads',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['createSearchCampaign', 'createPmaxCampaign'],
			},
		},
		required: true,
	},

	// Create PMax campaign fields
	{
		displayName: 'PMax Campaign Name',
		name: 'pmax_campaign_name',
		type: 'string',
		default: '',
		description: 'Name for the Performance Max campaign',
		displayOptions: {
			show: {
				platform: ['googleAds'],
				operation: ['createPmaxCampaign'],
			},
		},
		required: true,
	},
];
