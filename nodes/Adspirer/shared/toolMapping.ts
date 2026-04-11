import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Maps n8n UI operation keys to MCP tool names.
 * Format: "platform.operation" → "mcp_tool_name"
 */
export const TOOL_NAME_MAP: Record<string, string> = {
	// Google Ads
	'googleAds.budgetOptimization': 'optimize_budget_allocation',
	'googleAds.campaignPerformance': 'get_campaign_performance',
	'googleAds.createPmaxCampaign': 'create_pmax_campaign',
	'googleAds.createSearchCampaign': 'create_search_campaign',
	'googleAds.keywordResearch': 'research_keywords',
	'googleAds.listCampaigns': 'list_campaigns',
	'googleAds.searchTerms': 'analyze_search_terms',
	'googleAds.wastedSpend': 'analyze_wasted_spend',

	// Meta Ads
	'metaAds.adPerformance': 'analyze_meta_ad_performance',
	'metaAds.audienceInsights': 'get_meta_audience_insights',
	'metaAds.campaignPerformance': 'get_meta_campaign_performance',
	'metaAds.listCampaigns': 'list_meta_campaigns',
	'metaAds.wastedSpend': 'analyze_meta_wasted_spend',
};

/**
 * Builds MCP tool arguments from n8n node parameters.
 * Only includes parameters that have non-empty values.
 */
export function buildToolArguments(
	context: IExecuteFunctions,
	itemIndex: number,
	platform: string,
	operation: string,
): Record<string, unknown> {
	const args: Record<string, unknown> = {};

	// Helper to safely get optional parameters
	const getParam = (name: string, fallback?: unknown): unknown => {
		try {
			const value = context.getNodeParameter(name, itemIndex, fallback);
			if (value === '' || value === undefined || value === null) return undefined;
			return value;
		} catch {
			return undefined;
		}
	};

	// Common: lookback_days
	const lookbackDays = getParam('lookback_days');
	if (lookbackDays !== undefined) args.lookback_days = lookbackDays;

	// Google Ads: customer_id
	if (platform === 'googleAds') {
		const customerId = getParam('customer_id');
		if (customerId !== undefined) args.customer_id = customerId;
	}

	// Meta Ads: ad_account_id
	if (platform === 'metaAds') {
		const adAccountId = getParam('ad_account_id');
		if (adAccountId !== undefined) args.ad_account_id = adAccountId;
	}

	// Operation-specific arguments
	if (operation === 'keywordResearch') {
		const keywords = getParam('keywords');
		if (keywords !== undefined) args.seed_keywords = keywords;

		const businessDescription = getParam('business_description');
		if (businessDescription !== undefined) args.business_description = businessDescription;

		const landingPageUrl = getParam('landing_page_url');
		if (landingPageUrl !== undefined) args.website_url = landingPageUrl;
	}

	if (operation === 'wastedSpend') {
		const targetRoas = getParam('target_roas');
		if (targetRoas !== undefined) args.target_roas = targetRoas;
	}

	if (operation === 'budgetOptimization') {
		const totalBudget = getParam('total_budget');
		if (totalBudget !== undefined) args.total_budget = totalBudget;

		const targetRoas = getParam('target_roas');
		if (targetRoas !== undefined) args.target_roas = targetRoas;
	}

	if (operation === 'createSearchCampaign') {
		const campaignName = getParam('campaign_name');
		if (campaignName !== undefined) args.campaign_name = campaignName;

		const dailyBudget = getParam('daily_budget');
		if (dailyBudget !== undefined) args.budget_daily = dailyBudget;

		const campaignKeywords = getParam('campaign_keywords');
		if (campaignKeywords !== undefined) args.keywords = campaignKeywords;

		const targetLocations = getParam('target_locations');
		if (targetLocations !== undefined) args.target_locations = targetLocations;

		const finalUrl = getParam('final_url');
		if (finalUrl !== undefined) args.website_url = finalUrl;
	}

	if (operation === 'createPmaxCampaign') {
		const pmaxName = getParam('pmax_campaign_name');
		if (pmaxName !== undefined) args.campaign_name = pmaxName;

		const dailyBudget = getParam('daily_budget');
		if (dailyBudget !== undefined) args.budget_daily = dailyBudget;

		const finalUrl = getParam('final_url');
		if (finalUrl !== undefined) args.final_url = finalUrl;

		const targetLocations = getParam('target_locations');
		if (targetLocations !== undefined) args.target_locations = targetLocations;
	}

	if (operation === 'listCampaigns') {
		const statusFilter = getParam('status_filter');
		if (statusFilter !== undefined) args.status_filter = statusFilter;
	}

	return args;
}
