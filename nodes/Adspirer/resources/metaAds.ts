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
				name: 'Campaign Performance',
				value: 'campaignPerformance',
				action: 'Analyze meta ads campaign performance',
				description: 'Get performance metrics for Meta ad campaigns',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/meta-ads/performance',
					},
				},
			},
			{
				name: 'Ad Performance',
				value: 'adPerformance',
				action: 'Analyze meta ad creative performance',
				description: 'Analyze individual ad and creative performance with fatigue detection',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/meta-ads/ad-performance',
					},
				},
			},
			{
				name: 'Audience Insights',
				value: 'audienceInsights',
				action: 'Get meta ads audience insights',
				description: 'Get audience demographics, placement analysis, and targeting insights',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/actions/meta-ads/audience-insights',
					},
				},
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
		type: 'number',
		default: 30,
		description: 'Number of days to look back for analysis',
		displayOptions: {
			show: {
				platform: ['metaAds'],
				operation: ['campaignPerformance', 'adPerformance', 'audienceInsights'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'arguments.lookback_days',
			},
		},
	},
];
