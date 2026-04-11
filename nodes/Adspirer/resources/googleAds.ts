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
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/google-ads/budget-optimization',
					},
				},
			},
			{
				name: 'Campaign Performance',
				value: 'campaignPerformance',
				action: 'Analyze google ads campaign performance',
				description: 'Get performance metrics for all campaigns over a date range',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/google-ads/performance',
					},
				},
			},
			{
				name: 'Create PMax Campaign',
				value: 'createPmaxCampaign',
				action: 'Create a google performance max campaign',
				description: 'Create a new Performance Max campaign with assets',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/google-ads/create-pmax-campaign',
					},
				},
			},
			{
				name: 'Create Search Campaign',
				value: 'createSearchCampaign',
				action: 'Create a google search campaign',
				description: 'Create a new Google Search campaign with keywords and ads',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/google-ads/create-search-campaign',
					},
				},
			},
			{
				name: 'Keyword Research',
				value: 'keywordResearch',
				action: 'Research google ads keywords',
				description: 'Research keywords with CPC, search volume, and competition data',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/google-ads/keyword-research',
					},
				},
			},
			{
				name: 'Search Terms Analysis',
				value: 'searchTerms',
				action: 'Analyze google ads search terms',
				description: 'Analyze search term performance and find negative keyword opportunities',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/google-ads/search-terms',
					},
				},
			},
			{
				name: 'Wasted Spend Analysis',
				value: 'wastedSpend',
				action: 'Analyze wasted google ads spend',
				description: 'Identify wasted ad spend and get optimization recommendations',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/google-ads/wasted-spend',
					},
				},
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
		type: 'number',
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.lookback_days',
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
				operation: [
					'campaignPerformance',
					'wastedSpend',
					'budgetOptimization',
				],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'arguments.customer_id',
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.keywords',
			},
		},
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.business_description',
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.landing_page_url',
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.campaign_name',
			},
		},
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.daily_budget',
			},
		},
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.keywords',
			},
		},
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.target_locations',
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.final_url',
			},
		},
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
		routing: {
			send: {
				type: 'body',
				property: 'arguments.campaign_name',
			},
		},
	},
];
