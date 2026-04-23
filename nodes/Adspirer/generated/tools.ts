// GENERATED FILE — DO NOT EDIT BY HAND.
// Regenerate via: node scripts/generate-operations.js

export type ToolArgType = 'string' | 'integer' | 'number' | 'boolean';

export interface ToolArg {
	name: string;
	title: string;
	type: ToolArgType;
	required: boolean;
	description: string;
	default?: string | number | boolean;
	enum?: string[];
}

export interface ToolMeta {
	name: string;
	platform: 'googleAds' | 'metaAds' | 'linkedinAds' | 'tiktokAds' | 'utility';
	operationId: string;
	displayName: string;
	description: string;
	readOnly: boolean;
	destructive: boolean;
	args: ToolArg[];
	skipped?: string;
}

export const TOOLS: ToolMeta[] = [
  {
    "name": "add_callout_extensions",
    "platform": "googleAds",
    "operationId": "addCalloutExtensions",
    "displayName": "Add Callout Extensions",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"callouts\" has unsupported type \"array\""
  },
  {
    "name": "add_demandgen_ad_group",
    "platform": "googleAds",
    "operationId": "addDemandgenAdGroup",
    "displayName": "Add Demandgen Ad Group",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"audience_segments\" has unsupported type \"object\""
  },
  {
    "name": "add_keywords",
    "platform": "googleAds",
    "operationId": "addKeywords",
    "displayName": "Add Keywords",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"keywords\" has unsupported type \"array\""
  },
  {
    "name": "add_negative_keywords",
    "platform": "googleAds",
    "operationId": "addNegativeKeywords",
    "displayName": "Add Negative Keywords",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"keywords\" has unsupported type \"array\""
  },
  {
    "name": "add_pmax_audience_signal",
    "platform": "googleAds",
    "operationId": "addPmaxAudienceSignal",
    "displayName": "Add Pmax Audience Signal",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"audience_config\" has unsupported type \"object\""
  },
  {
    "name": "add_pmax_search_themes",
    "platform": "googleAds",
    "operationId": "addPmaxSearchThemes",
    "displayName": "Add Pmax Search Themes",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"search_themes\" has unsupported type \"array\""
  },
  {
    "name": "add_sitelinks",
    "platform": "googleAds",
    "operationId": "addSitelinks",
    "displayName": "Add Sitelinks",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"sitelinks\" has unsupported type \"array\""
  },
  {
    "name": "add_structured_snippets",
    "platform": "googleAds",
    "operationId": "addStructuredSnippets",
    "displayName": "Add Structured Snippets",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"snippets\" has unsupported type \"array\""
  },
  {
    "name": "analyze_search_terms",
    "platform": "googleAds",
    "operationId": "analyzeSearchTerms",
    "displayName": "Analyze Search Terms",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "analysis_type",
        "title": "Analysis Type",
        "type": "string",
        "required": false,
        "description": "Type of analysis: 'opportunities', 'negatives', 'match_types', 'all', or 'raw_report'.",
        "default": "all"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Optional campaign ID to filter search terms to a specific campaign."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "force_refresh",
        "title": "Force Refresh",
        "type": "boolean",
        "required": false,
        "description": "If true, triggers immediate API collection from Google Ads (not yet implemented - currently uses cached data).",
        "default": false
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze search term data (7, 30, 60, 90, or 120 days).",
        "default": 30
      },
      {
        "name": "min_clicks",
        "title": "Min Clicks",
        "type": "integer",
        "required": false,
        "description": "Minimum clicks filter for raw_report.",
        "default": 0
      },
      {
        "name": "page",
        "title": "Page",
        "type": "integer",
        "required": false,
        "description": "Page number for raw_report (1-based).",
        "default": 1
      },
      {
        "name": "page_size",
        "title": "Page Size",
        "type": "integer",
        "required": false,
        "description": "Results per page for raw_report (1-100).",
        "default": 50
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "sort_by",
        "title": "Sort By",
        "type": "string",
        "required": false,
        "description": "Sort field for raw_report: 'cost' (default), 'clicks', 'impressions', 'conversions'",
        "default": "cost"
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "analyze_wasted_spend",
    "platform": "googleAds",
    "operationId": "analyzeWastedSpend",
    "displayName": "Analyze Wasted Spend",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 30, 60, 90, or 120 days).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Optional target ROAS override (e.g., 3.0 for 3.0x ROAS)."
      }
    ]
  },
  {
    "name": "create_ad",
    "platform": "googleAds",
    "operationId": "createAd",
    "displayName": "Create Ad",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"descriptions\" has unsupported type \"array\""
  },
  {
    "name": "create_demandgen_campaign",
    "platform": "googleAds",
    "operationId": "createDemandgenCampaign",
    "displayName": "Create Demandgen Campaign",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"audience_segments\" has unsupported type \"object\""
  },
  {
    "name": "create_pmax_campaign",
    "platform": "googleAds",
    "operationId": "createPmaxCampaign",
    "displayName": "Create Pmax Campaign",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"asset_groups\" has unsupported type \"array\""
  },
  {
    "name": "create_search_campaign",
    "platform": "googleAds",
    "operationId": "createSearchCampaign",
    "displayName": "Create Search Campaign",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"ad_groups\" has unsupported type \"array\""
  },
  {
    "name": "create_youtube_campaign",
    "platform": "googleAds",
    "operationId": "createYoutubeCampaign",
    "displayName": "Create Youtube Campaign",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"additional_video_ids\" has unsupported type \"array\""
  },
  {
    "name": "discover_existing_assets",
    "platform": "googleAds",
    "operationId": "discoverExistingAssets",
    "displayName": "Discover Existing Assets",
    "description": "🔍 Discover existing assets in the Google Ads account (images, sitelinks, callouts, structured snippets)",
    "readOnly": true,
    "destructive": false,
    "args": [],
    "skipped": "arg \"asset_types\" has unsupported type \"array\""
  },
  {
    "name": "explain_performance_anomaly",
    "platform": "googleAds",
    "operationId": "explainPerformanceAnomaly",
    "displayName": "Explain Performance Anomaly",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "metric",
        "title": "Metric",
        "type": "string",
        "required": true,
        "description": "Metric to explain: 'roas' (Return on Ad Spend), 'ctr' (Click-Through Rate), 'cpc' (Cost Per Click), 'conversions', or 'conversion_rate'"
      },
      {
        "name": "period_end",
        "title": "Period End",
        "type": "string",
        "required": true,
        "description": "End date of the anomaly period (ISO format: YYYY-MM-DD, e.g., '2025-01-21')."
      },
      {
        "name": "period_start",
        "title": "Period Start",
        "type": "string",
        "required": true,
        "description": "Start date of the anomaly period (ISO format: YYYY-MM-DD, e.g., '2025-01-15')"
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      }
    ]
  },
  {
    "name": "get_benchmark_context",
    "platform": "googleAds",
    "operationId": "getBenchmarkContext",
    "displayName": "Get Benchmark Context",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "include_recommendations",
        "title": "Include Recommendations",
        "type": "boolean",
        "required": false,
        "description": "Include performance recommendations based on benchmarks (default: true)",
        "default": true
      }
    ]
  },
  {
    "name": "get_business_profile",
    "platform": "googleAds",
    "operationId": "getBusinessProfile",
    "displayName": "Get Business Profile",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "get_campaign_performance",
    "platform": "googleAds",
    "operationId": "getCampaignPerformance",
    "displayName": "Get Campaign Performance",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "get_campaign_structure",
    "platform": "googleAds",
    "operationId": "getCampaignStructure",
    "displayName": "Get Campaign Structure",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_group_id",
        "title": "Ad Group Id",
        "type": "string",
        "required": false,
        "description": "Optional: Fetch only this specific ad group's details (bypasses pagination)"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The campaign ID to get structure for."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "include",
        "title": "Include",
        "type": "string",
        "required": false,
        "description": "What to include per ad group: 'all' (default), 'summary' (counts only, no nested data), 'keywords' (keywords only), 'ads' (ads only)",
        "default": "all"
      },
      {
        "name": "page",
        "title": "Page",
        "type": "integer",
        "required": false,
        "description": "Page number (1-based).",
        "default": 1
      },
      {
        "name": "page_size",
        "title": "Page Size",
        "type": "integer",
        "required": false,
        "description": "Number of ad groups per page (1-50).",
        "default": 5
      }
    ]
  },
  {
    "name": "get_campaign_targeting",
    "platform": "googleAds",
    "operationId": "getCampaignTargeting",
    "displayName": "Get Campaign Targeting",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The campaign ID to get location targeting for."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "get_pmax_audience_signals",
    "platform": "googleAds",
    "operationId": "getPmaxAudienceSignals",
    "displayName": "Get Pmax Audience Signals",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Google Ads campaign ID (numeric)."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "get_pmax_search_themes",
    "platform": "googleAds",
    "operationId": "getPmaxSearchThemes",
    "displayName": "Get Pmax Search Themes",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Google Ads campaign ID (numeric)."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "get_usage_status",
    "platform": "googleAds",
    "operationId": "getUsageStatus",
    "displayName": "Get Usage Status",
    "description": "Get your current usage status with interactive quota widget",
    "readOnly": true,
    "destructive": false,
    "args": []
  },
  {
    "name": "help_user_upload",
    "platform": "googleAds",
    "operationId": "helpUserUpload",
    "displayName": "Help User Upload",
    "description": "Show user instructions for uploading images to postimages",
    "readOnly": true,
    "destructive": false,
    "args": []
  },
  {
    "name": "infer_business_profile",
    "platform": "googleAds",
    "operationId": "inferBusinessProfile",
    "displayName": "Infer Business Profile",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "force_save",
        "title": "Force Save",
        "type": "boolean",
        "required": false,
        "description": "If true, save the profile even if confidence is low.",
        "default": false
      }
    ]
  },
  {
    "name": "list_campaign_extensions",
    "platform": "googleAds",
    "operationId": "listCampaignExtensions",
    "displayName": "List Campaign Extensions",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The campaign ID to list extensions for."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "list_campaigns",
    "platform": "googleAds",
    "operationId": "listCampaigns",
    "displayName": "List Campaigns",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_type",
        "title": "Campaign Type",
        "type": "string",
        "required": false,
        "description": "Filter by type: SEARCH, PERFORMANCE_MAX, DISPLAY, SHOPPING, or ALL (default: ALL)"
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "status_filter",
        "title": "Status Filter",
        "type": "string",
        "required": false,
        "description": "Filter by status: ENABLED, PAUSED, or ALL (default: ALL)"
      }
    ]
  },
  {
    "name": "optimize_budget_allocation",
    "platform": "googleAds",
    "operationId": "optimizeBudgetAllocation",
    "displayName": "Optimize Budget Allocation",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze for historical performance (7, 30, 60, 90, or 120 days).",
        "default": 30
      },
      {
        "name": "max_change_percentage",
        "title": "Max Change Percentage",
        "type": "number",
        "required": false,
        "description": "Maximum budget change per campaign as a percentage (0.0-1.0).",
        "default": 0.5
      },
      {
        "name": "min_daily_budget",
        "title": "Min Daily Budget",
        "type": "number",
        "required": false,
        "description": "Minimum daily budget per campaign in dollars.",
        "default": 5
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Optional target ROAS override (e.g., 3.0 for 3.0x ROAS)."
      },
      {
        "name": "total_budget",
        "title": "Total Budget",
        "type": "number",
        "required": true,
        "description": "Total monthly budget to allocate across campaigns (e.g., 15000.00 for $15K/month)"
      }
    ]
  },
  {
    "name": "pause_ad",
    "platform": "googleAds",
    "operationId": "pauseAd",
    "displayName": "Pause Ad",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_group_id",
        "title": "Ad Group Id",
        "type": "string",
        "required": true,
        "description": "The ad group ID the ad belongs to."
      },
      {
        "name": "ad_id",
        "title": "Ad Id",
        "type": "string",
        "required": true,
        "description": "The ad ID to pause."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "pause_campaign",
    "platform": "googleAds",
    "operationId": "pauseCampaign",
    "displayName": "Pause Campaign",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The campaign ID to pause."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "remove_keywords",
    "platform": "googleAds",
    "operationId": "removeKeywords",
    "displayName": "Remove Keywords",
    "description": "",
    "readOnly": false,
    "destructive": true,
    "args": [],
    "skipped": "arg \"keyword_ids\" has unsupported type \"array\""
  },
  {
    "name": "remove_negative_keywords",
    "platform": "googleAds",
    "operationId": "removeNegativeKeywords",
    "displayName": "Remove Negative Keywords",
    "description": "",
    "readOnly": false,
    "destructive": true,
    "args": [],
    "skipped": "arg \"keyword_ids\" has unsupported type \"array\""
  },
  {
    "name": "remove_pmax_audience_signal",
    "platform": "googleAds",
    "operationId": "removePmaxAudienceSignal",
    "displayName": "Remove Pmax Audience Signal",
    "description": "",
    "readOnly": false,
    "destructive": true,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Google Ads campaign ID (numeric)."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "signal_resource_name",
        "title": "Signal Resource Name",
        "type": "string",
        "required": true,
        "description": "The resource name of the audience signal to remove."
      }
    ]
  },
  {
    "name": "remove_pmax_search_themes",
    "platform": "googleAds",
    "operationId": "removePmaxSearchThemes",
    "displayName": "Remove Pmax Search Themes",
    "description": "",
    "readOnly": false,
    "destructive": true,
    "args": [],
    "skipped": "arg \"themes_to_remove\" has unsupported type \"array\""
  },
  {
    "name": "research_keywords",
    "platform": "googleAds",
    "operationId": "researchKeywords",
    "displayName": "Research Keywords",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [],
    "skipped": "arg \"seed_keywords\" has unsupported type \"array\""
  },
  {
    "name": "resume_ad",
    "platform": "googleAds",
    "operationId": "resumeAd",
    "displayName": "Resume Ad",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_group_id",
        "title": "Ad Group Id",
        "type": "string",
        "required": true,
        "description": "The ad group ID the ad belongs to."
      },
      {
        "name": "ad_id",
        "title": "Ad Id",
        "type": "string",
        "required": true,
        "description": "The ad ID to resume."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "resume_campaign",
    "platform": "googleAds",
    "operationId": "resumeCampaign",
    "displayName": "Resume Campaign",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The campaign ID to resume."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      }
    ]
  },
  {
    "name": "save_business_profile",
    "platform": "googleAds",
    "operationId": "saveBusinessProfile",
    "displayName": "Save Business Profile",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "business_size",
        "title": "Business Size",
        "type": "string",
        "required": true,
        "description": "Business size: 'small' (<$50K/month ad spend), 'medium' ($50K-$500K/month), 'large' (>$500K/month)"
      },
      {
        "name": "business_vertical",
        "title": "Business Vertical",
        "type": "string",
        "required": true,
        "description": "Business vertical (e.g., 'retail', 'services', 'technology', 'healthcare', 'finance', 'education', 'travel', 'food_beverage', 'automotive', 'real_estate')"
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "geographic_focus",
        "title": "Geographic Focus",
        "type": "string",
        "required": false,
        "description": "Geographic focus: 'local', 'regional', 'national', 'international'"
      },
      {
        "name": "primary_goal",
        "title": "Primary Goal",
        "type": "string",
        "required": true,
        "description": "Primary advertising goal: 'leads', 'sales', 'awareness', 'traffic', 'engagement', 'app_installs'"
      },
      {
        "name": "seasonality",
        "title": "Seasonality",
        "type": "string",
        "required": false,
        "description": "Seasonality pattern: 'none', 'holiday_heavy', 'summer_peak', 'winter_peak', 'q4_heavy', 'back_to_school'"
      },
      {
        "name": "target_audience",
        "title": "Target Audience",
        "type": "string",
        "required": false,
        "description": "Target audience description (e.g., 'B2B enterprise clients', 'young professionals 25-35')"
      }
    ]
  },
  {
    "name": "search_audiences",
    "platform": "googleAds",
    "operationId": "searchAudiences",
    "displayName": "Search Audiences",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "query",
        "title": "Query",
        "type": "string",
        "required": true,
        "description": "Search query for discovering audiences."
      }
    ]
  },
  {
    "name": "select_google_campaign_type",
    "platform": "googleAds",
    "operationId": "selectGoogleCampaignType",
    "displayName": "Select Google Campaign Type",
    "description": "**USE THIS TOOL FIRST WHEN:** User wants to create a Google Ads campaign but hasn't specified the campaign type (Sear...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_type",
        "title": "Campaign Type",
        "type": "string",
        "required": true,
        "description": "Type of Google Ads campaign to create."
      }
    ]
  },
  {
    "name": "suggest_ad_content",
    "platform": "googleAds",
    "operationId": "suggestAdContent",
    "displayName": "Suggest Ad Content",
    "description": "",
    "readOnly": true,
    "destructive": false,
    "args": [],
    "skipped": "arg \"key_benefits\" has unsupported type \"array\""
  },
  {
    "name": "update_ad_content",
    "platform": "googleAds",
    "operationId": "updateAdContent",
    "displayName": "Update Ad Content",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"descriptions\" has unsupported type \"array\""
  },
  {
    "name": "update_ad_descriptions",
    "platform": "googleAds",
    "operationId": "updateAdDescriptions",
    "displayName": "Update Ad Descriptions",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"descriptions\" has unsupported type \"array\""
  },
  {
    "name": "update_ad_headlines",
    "platform": "googleAds",
    "operationId": "updateAdHeadlines",
    "displayName": "Update Ad Headlines",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"headlines\" has unsupported type \"array\""
  },
  {
    "name": "update_bid_strategy",
    "platform": "googleAds",
    "operationId": "updateBidStrategy",
    "displayName": "Update Bid Strategy",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The campaign ID to update."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "strategy",
        "title": "Strategy",
        "type": "string",
        "required": true,
        "description": "Bidding strategy: MAXIMIZE_CLICKS, MAXIMIZE_CONVERSIONS, MAXIMIZE_CONVERSION_VALUE, TARGET_CPA, or TARGET_ROAS"
      },
      {
        "name": "target_cpa",
        "title": "Target Cpa",
        "type": "number",
        "required": false,
        "description": "Target CPA in dollars (required if strategy is TARGET_CPA)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Target ROAS multiplier (required if strategy is TARGET_ROAS)."
      }
    ]
  },
  {
    "name": "update_campaign",
    "platform": "googleAds",
    "operationId": "updateCampaign",
    "displayName": "Update Campaign",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "budget_amount",
        "title": "Budget Amount",
        "type": "number",
        "required": false,
        "description": "New daily budget in dollars, e.g., 50.00 for $50/day (optional)"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The campaign ID to update."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "name",
        "title": "Name",
        "type": "string",
        "required": false,
        "description": "New campaign name (optional)"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "New status: ENABLED or PAUSED (optional)"
      }
    ]
  },
  {
    "name": "update_keyword",
    "platform": "googleAds",
    "operationId": "updateKeyword",
    "displayName": "Update Keyword",
    "description": "",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_group_id",
        "title": "Ad Group Id",
        "type": "string",
        "required": true,
        "description": "The ad group ID the keyword belongs to."
      },
      {
        "name": "cpc_bid_micros",
        "title": "Cpc Bid Micros",
        "type": "integer",
        "required": false,
        "description": "New bid in micros (1 USD = 1,000,000 micros)."
      },
      {
        "name": "customer_id",
        "title": "Customer Id",
        "type": "string",
        "required": false,
        "description": "Google Ads customer ID."
      },
      {
        "name": "keyword_id",
        "title": "Keyword Id",
        "type": "string",
        "required": true,
        "description": "The keyword ID to update."
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "New status: ENABLED or PAUSED"
      }
    ]
  },
  {
    "name": "validate_and_prepare_assets",
    "platform": "googleAds",
    "operationId": "validateAndPrepareAssets",
    "displayName": "Validate And Prepare Assets",
    "description": "🔄 LONG-RUNNING TOOL: Validates multiple images from URLs for Performance Max campaigns [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"logos_landscape\" has unsupported type \"array\""
  },
  {
    "name": "validate_video",
    "platform": "googleAds",
    "operationId": "validateVideo",
    "displayName": "Validate Video",
    "description": "Validate video for ad campaigns (unified tool for all platforms)",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "platform",
        "title": "Platform",
        "type": "string",
        "required": true,
        "description": "Target platform: 'pmax' or 'tiktok'."
      },
      {
        "name": "video_url_or_id",
        "title": "Video Url Or Id",
        "type": "string",
        "required": true,
        "description": "YouTube video URL/ID (for PMAX) OR public video file URL (for TikTok)."
      }
    ]
  },
  {
    "name": "add_linkedin_campaign_to_group",
    "platform": "linkedinAds",
    "operationId": "addLinkedinCampaignToGroup",
    "displayName": "Add Linkedin Campaign To Group",
    "description": "**USE THIS TOOL WHEN:** User wants to add a new campaign with DIFFERENT targeting/audience to an EXISTING campaign group [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"age_ranges\" has unsupported type \"array\""
  },
  {
    "name": "add_linkedin_carousel_creative",
    "platform": "linkedinAds",
    "operationId": "addLinkedinCarouselCreative",
    "displayName": "Add Linkedin Carousel Creative",
    "description": "User wants to add another carousel ad variation to an existing carousel campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"cards\" has unsupported type \"array\""
  },
  {
    "name": "add_linkedin_creative",
    "platform": "linkedinAds",
    "operationId": "addLinkedinCreative",
    "displayName": "Add Linkedin Creative",
    "description": "**USE THIS TOOL WHEN:** User wants to add another IMAGE ad/creative to an EXISTING LinkedIn image campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "call_to_action",
        "title": "Call To Action",
        "type": "string",
        "required": false,
        "description": "Call-to-action button label",
        "default": "LEARN_MORE"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to add creative to"
      },
      {
        "name": "creative_name",
        "title": "Creative Name",
        "type": "string",
        "required": false,
        "description": "Name for this creative (shown in Campaign Manager UI)."
      },
      {
        "name": "headline",
        "title": "Headline",
        "type": "string",
        "required": false,
        "description": "Ad headline (up to 70 characters)"
      },
      {
        "name": "image_urn",
        "title": "Image Urn",
        "type": "string",
        "required": true,
        "description": "Image asset URN from discover_linkedin_assets or validate_and_prepare_linkedin_assets"
      },
      {
        "name": "introductory_text",
        "title": "Introductory Text",
        "type": "string",
        "required": true,
        "description": "Main ad text/copy (up to 600 characters)"
      },
      {
        "name": "landing_page_url",
        "title": "Landing Page Url",
        "type": "string",
        "required": true,
        "description": "Destination URL where users will be directed"
      },
      {
        "name": "organization_id",
        "title": "Organization Id",
        "type": "string",
        "required": true,
        "description": "Organization ID for ad authoring"
      }
    ]
  },
  {
    "name": "add_linkedin_text_creative",
    "platform": "linkedinAds",
    "operationId": "addLinkedinTextCreative",
    "displayName": "Add Linkedin Text Creative",
    "description": "**USE THIS TOOL WHEN:** User wants to add another text ad to an EXISTING TEXT_AD campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID (optional, auto-resolved if omitted)"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to add the text ad creative to"
      },
      {
        "name": "creative_name",
        "title": "Creative Name",
        "type": "string",
        "required": false,
        "description": "Name for this creative (shown in Campaign Manager UI)."
      },
      {
        "name": "description",
        "title": "Description",
        "type": "string",
        "required": true,
        "description": "Text ad description (max 75 characters)"
      },
      {
        "name": "headline",
        "title": "Headline",
        "type": "string",
        "required": true,
        "description": "Text ad headline (max 25 characters)"
      },
      {
        "name": "image_urn",
        "title": "Image Urn",
        "type": "string",
        "required": false,
        "description": "Optional 100x100 logo/image URN for the text ad (JPG/PNG, max 2MB)."
      },
      {
        "name": "landing_page_url",
        "title": "Landing Page Url",
        "type": "string",
        "required": true,
        "description": "Destination URL (must start with https://)"
      }
    ]
  },
  {
    "name": "add_linkedin_video_creative",
    "platform": "linkedinAds",
    "operationId": "addLinkedinVideoCreative",
    "displayName": "Add Linkedin Video Creative",
    "description": "**USE THIS TOOL WHEN:** User wants to add another video ad to an EXISTING LinkedIn video campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID (optional, auto-resolved if omitted)"
      },
      {
        "name": "call_to_action",
        "title": "Call To Action",
        "type": "string",
        "required": false,
        "description": "Call-to-action button label",
        "default": "LEARN_MORE"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to add the video creative to"
      },
      {
        "name": "creative_name",
        "title": "Creative Name",
        "type": "string",
        "required": false,
        "description": "Name for this creative (shown in Campaign Manager UI)."
      },
      {
        "name": "headline",
        "title": "Headline",
        "type": "string",
        "required": false,
        "description": "Ad headline (up to 70 characters)"
      },
      {
        "name": "introductory_text",
        "title": "Introductory Text",
        "type": "string",
        "required": true,
        "description": "Main ad text/copy (up to 600 characters)"
      },
      {
        "name": "landing_page_url",
        "title": "Landing Page Url",
        "type": "string",
        "required": true,
        "description": "Destination URL (must start with https://)"
      },
      {
        "name": "organization_id",
        "title": "Organization Id",
        "type": "string",
        "required": true,
        "description": "Organization ID for ad authoring"
      },
      {
        "name": "video_urn",
        "title": "Video Urn",
        "type": "string",
        "required": true,
        "description": "Video asset URN (urn:li:video:...) from discover_linkedin_assets or video upload"
      }
    ]
  },
  {
    "name": "analyze_linkedin_creative_performance",
    "platform": "linkedinAds",
    "operationId": "analyzeLinkedinCreativePerformance",
    "displayName": "Analyze Linkedin Creative Performance",
    "description": "User asks about ad/creative performance, wants to identify winning/losing ad variations, or asks about creative fatigue",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Optional: Filter to specific campaign"
      },
      {
        "name": "campaign_name",
        "title": "Campaign Name",
        "type": "string",
        "required": false,
        "description": "Filter by campaign name (partial match)."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7-120).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "analyze_linkedin_wasted_spend",
    "platform": "linkedinAds",
    "operationId": "analyzeLinkedinWastedSpend",
    "displayName": "Analyze Linkedin Wasted Spend",
    "description": "User asks about wasted ad spend, unprofitable campaigns, where their LinkedIn budget is being wasted, or wants to ide...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "include_creative_analysis",
        "title": "Include Creative Analysis",
        "type": "boolean",
        "required": false,
        "description": "Include creative-level waste analysis (fatigue, low engagement).",
        "default": true
      },
      {
        "name": "include_demographic_breakdown",
        "title": "Include Demographic Breakdown",
        "type": "boolean",
        "required": false,
        "description": "Include B2B demographic waste analysis (seniority, industry, company size).",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7-120).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Override target ROAS threshold."
      }
    ]
  },
  {
    "name": "associate_linkedin_conversion",
    "platform": "linkedinAds",
    "operationId": "associateLinkedinConversion",
    "displayName": "Associate Linkedin Conversion",
    "description": "User wants to add conversion tracking to a campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to associate conversion with"
      },
      {
        "name": "conversion_id",
        "title": "Conversion Id",
        "type": "string",
        "required": true,
        "description": "Conversion ID to associate"
      }
    ]
  },
  {
    "name": "batch_update_linkedin_campaigns",
    "platform": "linkedinAds",
    "operationId": "batchUpdateLinkedinCampaigns",
    "displayName": "Batch Update Linkedin Campaigns",
    "description": "User wants to update multiple LinkedIn campaigns at once (bulk operations) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"campaign_ids\" has unsupported type \"array\""
  },
  {
    "name": "clone_linkedin_campaign",
    "platform": "linkedinAds",
    "operationId": "cloneLinkedinCampaign",
    "displayName": "Clone Linkedin Campaign",
    "description": "User wants to duplicate, copy, or clone a LinkedIn campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"locations\" has unsupported type \"array\""
  },
  {
    "name": "create_linkedin_carousel_campaign",
    "platform": "linkedinAds",
    "operationId": "createLinkedinCarouselCampaign",
    "displayName": "Create Linkedin Carousel Campaign",
    "description": "**USE THIS TOOL WHEN:** User wants to create a LinkedIn CAROUSEL ad campaign (2-10 swipeable image cards) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"age_ranges\" has unsupported type \"array\""
  },
  {
    "name": "create_linkedin_image_campaign",
    "platform": "linkedinAds",
    "operationId": "createLinkedinImageCampaign",
    "displayName": "Create Linkedin Image Campaign",
    "description": "⚠️ STOP - DO NOT CALL THIS TOOL DIRECTLY!",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"age_ranges\" has unsupported type \"array\""
  },
  {
    "name": "create_linkedin_text_campaign",
    "platform": "linkedinAds",
    "operationId": "createLinkedinTextCampaign",
    "displayName": "Create Linkedin Text Campaign",
    "description": "**USE THIS TOOL WHEN:** User wants to create a LinkedIn TEXT ad campaign (desktop right rail/top banner) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"age_ranges\" has unsupported type \"array\""
  },
  {
    "name": "create_linkedin_video_campaign",
    "platform": "linkedinAds",
    "operationId": "createLinkedinVideoCampaign",
    "displayName": "Create Linkedin Video Campaign",
    "description": "**USE THIS TOOL WHEN:** User wants to create a LinkedIn VIDEO ad campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"age_ranges\" has unsupported type \"array\""
  },
  {
    "name": "delete_linkedin_creative",
    "platform": "linkedinAds",
    "operationId": "deleteLinkedinCreative",
    "displayName": "Delete Linkedin Creative",
    "description": "User wants to delete, archive, or remove a LinkedIn ad/creative [write]",
    "readOnly": false,
    "destructive": true,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "creative_id",
        "title": "Creative Id",
        "type": "string",
        "required": true,
        "description": "Creative ID to archive or delete"
      },
      {
        "name": "permanent",
        "title": "Permanent",
        "type": "boolean",
        "required": false,
        "description": "If True, permanently deletes.",
        "default": false
      }
    ]
  },
  {
    "name": "discover_linkedin_assets",
    "platform": "linkedinAds",
    "operationId": "discoverLinkedinAssets",
    "displayName": "Discover Linkedin Assets",
    "description": "User wants to find existing images/videos in their LinkedIn account to reuse",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account (Sponsored Account) ID."
      },
      {
        "name": "asset_type",
        "title": "Asset Type",
        "type": "string",
        "required": false,
        "description": "Type of assets to discover: 'image', 'video', or 'all' (default).",
        "default": "all"
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of assets to return (default: 50, max: 100)",
        "default": 50
      },
      {
        "name": "organization_id",
        "title": "Organization Id",
        "type": "string",
        "required": true,
        "description": "LinkedIn Organization (Company Page) ID."
      }
    ]
  },
  {
    "name": "explain_linkedin_anomaly",
    "platform": "linkedinAds",
    "operationId": "explainLinkedinAnomaly",
    "displayName": "Explain Linkedin Anomaly",
    "description": "User asks why their LinkedIn metrics changed, wants to understand a performance drop/spike, or says something like \"M...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "comparison_period_end",
        "title": "Comparison Period End",
        "type": "string",
        "required": false,
        "description": "Optional end date of comparison period."
      },
      {
        "name": "comparison_period_start",
        "title": "Comparison Period Start",
        "type": "string",
        "required": false,
        "description": "Optional start date of comparison period."
      },
      {
        "name": "metric",
        "title": "Metric",
        "type": "string",
        "required": false,
        "description": "Metric to analyze.",
        "default": "ctr"
      },
      {
        "name": "period_end",
        "title": "Period End",
        "type": "string",
        "required": false,
        "description": "End date of analysis period (YYYY-MM-DD format)."
      },
      {
        "name": "period_start",
        "title": "Period Start",
        "type": "string",
        "required": false,
        "description": "Start date of analysis period (YYYY-MM-DD format)."
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      }
    ]
  },
  {
    "name": "explain_linkedin_objectives",
    "platform": "linkedinAds",
    "operationId": "explainLinkedinObjectives",
    "displayName": "Explain Linkedin Objectives",
    "description": "User asks about LinkedIn campaign objectives or which one to choose",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "business_type",
        "title": "Business Type",
        "type": "string",
        "required": false,
        "description": "Type of business (e.g., 'B2B SaaS', 'E-commerce', 'Agency')"
      },
      {
        "name": "goal",
        "title": "Goal",
        "type": "string",
        "required": false,
        "description": "What the user wants to achieve (e.g., 'get signups', 'drive traffic', 'build awareness')"
      }
    ]
  },
  {
    "name": "generate_linkedin_ad_creatives",
    "platform": "linkedinAds",
    "operationId": "generateLinkedinAdCreatives",
    "displayName": "Generate Linkedin Ad Creatives",
    "description": "User needs ad copy for LinkedIn campaigns",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "business_description",
        "title": "Business Description",
        "type": "string",
        "required": true,
        "description": "Brief description of what the business does (1-2 sentences)"
      },
      {
        "name": "business_name",
        "title": "Business Name",
        "type": "string",
        "required": true,
        "description": "Name of the business/product being advertised"
      },
      {
        "name": "campaign_objective",
        "title": "Campaign Objective",
        "type": "string",
        "required": false,
        "description": "Campaign objective: WEBSITE_VISIT, LEAD_GENERATION, BRAND_AWARENESS, etc.",
        "default": "WEBSITE_VISIT"
      },
      {
        "name": "include_stats",
        "title": "Include Stats",
        "type": "boolean",
        "required": false,
        "description": "Whether to include statistics/numbers in copy (user should provide if True)",
        "default": false
      },
      {
        "name": "landing_page_url",
        "title": "Landing Page Url",
        "type": "string",
        "required": true,
        "description": "URL where users will be directed when they click the ad"
      },
      {
        "name": "stats_to_include",
        "title": "Stats To Include",
        "type": "string",
        "required": false,
        "description": "Statistics to potentially include (e.g., '500+ customers', '10 hours saved/week')"
      },
      {
        "name": "target_audience",
        "title": "Target Audience",
        "type": "string",
        "required": true,
        "description": "Description of who the ad is targeting (e.g., 'Marketing managers at SaaS companies')"
      },
      {
        "name": "tone",
        "title": "Tone",
        "type": "string",
        "required": false,
        "description": "Tone of voice: 'professional', 'casual', 'urgent', 'inspirational'",
        "default": "professional"
      },
      {
        "name": "value_proposition",
        "title": "Value Proposition",
        "type": "string",
        "required": true,
        "description": "Main benefit or value the product/service provides"
      }
    ]
  },
  {
    "name": "get_linkedin_audience_insights",
    "platform": "linkedinAds",
    "operationId": "getLinkedinAudienceInsights",
    "displayName": "Get Linkedin Audience Insights",
    "description": "User asks about B2B audience demographics, which professional segments perform best, targeting optimization, or wants...",
    "readOnly": true,
    "destructive": false,
    "args": [],
    "skipped": "arg \"breakdown_types\" has unsupported type \"array\""
  },
  {
    "name": "get_linkedin_campaign_performance",
    "platform": "linkedinAds",
    "operationId": "getLinkedinCampaignPerformance",
    "displayName": "Get Linkedin Campaign Performance",
    "description": "User asks about LinkedIn Ads performance, campaign metrics, B2B engagement, ROAS, or wants to understand how their Li...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ads account ID (optional - uses default connected account)"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter performance to a specific campaign ID."
      },
      {
        "name": "campaign_name",
        "title": "Campaign Name",
        "type": "string",
        "required": false,
        "description": "Filter performance by campaign name (partial match)."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "include_campaigns",
        "title": "Include Campaigns",
        "type": "boolean",
        "required": false,
        "description": "Include per-campaign breakdown.",
        "default": true
      },
      {
        "name": "include_comprehensive",
        "title": "Include Comprehensive",
        "type": "boolean",
        "required": false,
        "description": "Include creative and engagement analysis.",
        "default": true
      },
      {
        "name": "include_trends",
        "title": "Include Trends",
        "type": "boolean",
        "required": false,
        "description": "Include trend data (daily metrics, WoW/MoM changes).",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7-120).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "get_linkedin_campaign_structure",
    "platform": "linkedinAds",
    "operationId": "getLinkedinCampaignStructure",
    "displayName": "Get Linkedin Campaign Structure",
    "description": "User wants full details about a specific LinkedIn campaign",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID (optional - uses default connected account)"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to fetch structure for"
      }
    ]
  },
  {
    "name": "get_linkedin_campaign_targeting",
    "platform": "linkedinAds",
    "operationId": "getLinkedinCampaignTargeting",
    "displayName": "Get Linkedin Campaign Targeting",
    "description": "User wants to copy targeting from one campaign to another",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to get targeting from"
      }
    ]
  },
  {
    "name": "get_linkedin_engagement_metrics",
    "platform": "linkedinAds",
    "operationId": "getLinkedinEngagementMetrics",
    "displayName": "Get Linkedin Engagement Metrics",
    "description": "User asks specifically about LinkedIn engagement, social actions, lead generation metrics, or video performance",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter to a specific campaign ID."
      },
      {
        "name": "campaign_name",
        "title": "Campaign Name",
        "type": "string",
        "required": false,
        "description": "Filter by campaign name (partial match)."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7-120).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "get_linkedin_organizations",
    "platform": "linkedinAds",
    "operationId": "getLinkedinOrganizations",
    "displayName": "Get Linkedin Organizations",
    "description": "Fetch the LinkedIn Organizations (Company Pages) AND Ad Accounts the user can manage",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID (required for multi-account users, used for authentication)."
      }
    ]
  },
  {
    "name": "list_linkedin_campaign_groups",
    "platform": "linkedinAds",
    "operationId": "listLinkedinCampaignGroups",
    "displayName": "List Linkedin Campaign Groups",
    "description": "User wants to see their LinkedIn campaign groups (also called campaign folders or groups)",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "status_filter",
        "title": "Status Filter",
        "type": "string",
        "required": false,
        "description": "Filter by status.",
        "default": "ACTIVE,PAUSED,DRAFT"
      }
    ]
  },
  {
    "name": "list_linkedin_campaigns",
    "platform": "linkedinAds",
    "operationId": "listLinkedinCampaigns",
    "displayName": "List Linkedin Campaigns",
    "description": "User wants to see all their LinkedIn campaigns with performance metrics",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID (optional - uses default connected account)"
      },
      {
        "name": "campaign_group_id",
        "title": "Campaign Group Id",
        "type": "string",
        "required": false,
        "description": "Filter campaigns by Campaign Group ID."
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum campaigns to return (default: 50, max: 100)",
        "default": 50
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days for metrics (default: 30)",
        "default": 30
      },
      {
        "name": "status_filter",
        "title": "Status Filter",
        "type": "string",
        "required": false,
        "description": "Filter by status.",
        "default": "ACTIVE,PAUSED,DRAFT"
      }
    ]
  },
  {
    "name": "list_linkedin_conversions",
    "platform": "linkedinAds",
    "operationId": "listLinkedinConversions",
    "displayName": "List Linkedin Conversions",
    "description": "User wants to see available conversion tracking options",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      }
    ]
  },
  {
    "name": "list_linkedin_creatives",
    "platform": "linkedinAds",
    "operationId": "listLinkedinCreatives",
    "displayName": "List Linkedin Creatives",
    "description": "User wants to see all ads in a LinkedIn campaign",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to list creatives for"
      }
    ]
  },
  {
    "name": "manage_linkedin_conversions",
    "platform": "linkedinAds",
    "operationId": "manageLinkedinConversions",
    "displayName": "Manage Linkedin Conversions",
    "description": "User wants to manage LinkedIn conversion tracking - list, create, associate conversions, or set up full conversion tr...",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "action",
        "title": "Action",
        "type": "string",
        "required": true,
        "description": "Action: 'list', 'create', 'associate', or 'setup'"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Campaign ID (for 'associate' and 'setup' actions)"
      },
      {
        "name": "conversion_id",
        "title": "Conversion Id",
        "type": "string",
        "required": false,
        "description": "Conversion ID (for 'associate' action)"
      },
      {
        "name": "landing_page_url",
        "title": "Landing Page Url",
        "type": "string",
        "required": false,
        "description": "Landing page URL (for 'setup' action)"
      },
      {
        "name": "name",
        "title": "Name",
        "type": "string",
        "required": false,
        "description": "Conversion name (for 'create' action)"
      },
      {
        "name": "type",
        "title": "Type",
        "type": "string",
        "required": false,
        "description": "Conversion type: LEAD, PURCHASE, SIGN_UP, KEY_PAGE_VIEW, etc.",
        "default": "LEAD"
      },
      {
        "name": "url",
        "title": "Url",
        "type": "string",
        "required": false,
        "description": "URL for conversion rule matching"
      },
      {
        "name": "value",
        "title": "Value",
        "type": "number",
        "required": false,
        "description": "Fixed conversion value"
      }
    ]
  },
  {
    "name": "optimize_linkedin_budget",
    "platform": "linkedinAds",
    "operationId": "optimizeLinkedinBudget",
    "displayName": "Optimize Linkedin Budget",
    "description": "User asks how to allocate their LinkedIn budget, wants budget optimization recommendations, or asks \"How should I spl...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days of historical data to use for optimization.",
        "default": 30
      },
      {
        "name": "max_change_percentage",
        "title": "Max Change Percentage",
        "type": "number",
        "required": false,
        "description": "Maximum budget change per campaign (0.3-0.7).",
        "default": 0.5
      },
      {
        "name": "min_daily_budget",
        "title": "Min Daily Budget",
        "type": "number",
        "required": false,
        "description": "Minimum daily budget per campaign.",
        "default": 20
      },
      {
        "name": "optimization_goal",
        "title": "Optimization Goal",
        "type": "string",
        "required": false,
        "description": "Optimization goal: 'conversions' or 'leads'.",
        "default": "conversions"
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Target ROAS for optimization."
      },
      {
        "name": "total_budget",
        "title": "Total Budget",
        "type": "number",
        "required": true,
        "description": "Total monthly budget to allocate across campaigns (required, > 0)"
      }
    ]
  },
  {
    "name": "pause_linkedin_campaign",
    "platform": "linkedinAds",
    "operationId": "pauseLinkedinCampaign",
    "displayName": "Pause Linkedin Campaign",
    "description": "User wants to pause an active LinkedIn campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to pause"
      }
    ]
  },
  {
    "name": "pause_linkedin_creative",
    "platform": "linkedinAds",
    "operationId": "pauseLinkedinCreative",
    "displayName": "Pause Linkedin Creative",
    "description": "User wants to pause a specific ad within a campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "creative_id",
        "title": "Creative Id",
        "type": "string",
        "required": true,
        "description": "Creative ID to pause"
      }
    ]
  },
  {
    "name": "research_business_for_linkedin_targeting",
    "platform": "linkedinAds",
    "operationId": "researchBusinessForLinkedinTargeting",
    "displayName": "Research Business For Linkedin Targeting",
    "description": "User wants targeting recommendations based on their business",
    "readOnly": true,
    "destructive": false,
    "args": [],
    "skipped": "arg \"competitors\" has unsupported type \"array\""
  },
  {
    "name": "resume_linkedin_campaign",
    "platform": "linkedinAds",
    "operationId": "resumeLinkedinCampaign",
    "displayName": "Resume Linkedin Campaign",
    "description": "User wants to resume a paused LinkedIn campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to resume"
      }
    ]
  },
  {
    "name": "resume_linkedin_creative",
    "platform": "linkedinAds",
    "operationId": "resumeLinkedinCreative",
    "displayName": "Resume Linkedin Creative",
    "description": "User wants to resume a paused ad [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "creative_id",
        "title": "Creative Id",
        "type": "string",
        "required": true,
        "description": "Creative ID to resume"
      }
    ]
  },
  {
    "name": "search_linkedin_targeting",
    "platform": "linkedinAds",
    "operationId": "searchLinkedinTargeting",
    "displayName": "Search Linkedin Targeting",
    "description": "User needs to find targeting URNs for LinkedIn campaigns",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "facet_type",
        "title": "Facet Type",
        "type": "string",
        "required": true,
        "description": "Type of targeting to search: job_titles, industries, skills, locations, seniorities, company_sizes, job_functions, interests, etc."
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum results to return (default: 25)",
        "default": 25
      },
      {
        "name": "query",
        "title": "Query",
        "type": "string",
        "required": true,
        "description": "Search query"
      }
    ]
  },
  {
    "name": "select_linkedin_campaign_type",
    "platform": "linkedinAds",
    "operationId": "selectLinkedinCampaignType",
    "displayName": "Select Linkedin Campaign Type",
    "description": "User wants to create a LinkedIn ad campaign but hasn't specified the campaign type (image, video, carousel, or text)",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_type",
        "title": "Campaign Type",
        "type": "string",
        "required": true,
        "description": "Type of LinkedIn campaign to create."
      }
    ]
  },
  {
    "name": "update_linkedin_campaign",
    "platform": "linkedinAds",
    "operationId": "updateLinkedinCampaign",
    "displayName": "Update Linkedin Campaign",
    "description": "User wants to modify LinkedIn campaign settings [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"company_sizes\" has unsupported type \"array\""
  },
  {
    "name": "update_linkedin_campaign_budget",
    "platform": "linkedinAds",
    "operationId": "updateLinkedinCampaignBudget",
    "displayName": "Update Linkedin Campaign Budget",
    "description": "User wants to change a LinkedIn campaign's budget (daily or total) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to update"
      },
      {
        "name": "daily_budget",
        "title": "Daily Budget",
        "type": "number",
        "required": false,
        "description": "New daily budget (minimum $10)"
      },
      {
        "name": "remove_total_budget",
        "title": "Remove Total Budget",
        "type": "boolean",
        "required": false,
        "description": "Remove total budget cap (make unlimited)",
        "default": false
      },
      {
        "name": "total_budget",
        "title": "Total Budget",
        "type": "number",
        "required": false,
        "description": "New total/lifetime budget"
      }
    ]
  },
  {
    "name": "update_linkedin_campaign_group",
    "platform": "linkedinAds",
    "operationId": "updateLinkedinCampaignGroup",
    "displayName": "Update Linkedin Campaign Group",
    "description": "User wants to modify a LinkedIn campaign group (rename, change status, update budget) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_group_id",
        "title": "Campaign Group Id",
        "type": "string",
        "required": true,
        "description": "Campaign group ID to update"
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "New end date in ISO format"
      },
      {
        "name": "name",
        "title": "Name",
        "type": "string",
        "required": false,
        "description": "New name for the campaign group"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "New status: ACTIVE, PAUSED, or ARCHIVED"
      },
      {
        "name": "total_budget",
        "title": "Total Budget",
        "type": "number",
        "required": false,
        "description": "New total budget"
      }
    ]
  },
  {
    "name": "update_linkedin_campaign_schedule",
    "platform": "linkedinAds",
    "operationId": "updateLinkedinCampaignSchedule",
    "displayName": "Update Linkedin Campaign Schedule",
    "description": "User wants to change a LinkedIn campaign's end date or schedule [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Campaign ID to update"
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": true,
        "description": "New end date in ISO format (e.g."
      }
    ]
  },
  {
    "name": "update_linkedin_campaign_targeting",
    "platform": "linkedinAds",
    "operationId": "updateLinkedinCampaignTargeting",
    "displayName": "Update Linkedin Campaign Targeting",
    "description": "User wants to add or remove targeting criteria from a LinkedIn campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"add_age_ranges\" has unsupported type \"array\""
  },
  {
    "name": "update_linkedin_creative",
    "platform": "linkedinAds",
    "operationId": "updateLinkedinCreative",
    "displayName": "Update Linkedin Creative",
    "description": "User wants to edit a LinkedIn ad/creative [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "account_id",
        "title": "Account Id",
        "type": "string",
        "required": false,
        "description": "LinkedIn Ad Account ID."
      },
      {
        "name": "call_to_action",
        "title": "Call To Action",
        "type": "string",
        "required": false,
        "description": "New CTA label"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "Parent campaign ID"
      },
      {
        "name": "creative_id",
        "title": "Creative Id",
        "type": "string",
        "required": true,
        "description": "Creative ID to update"
      },
      {
        "name": "headline",
        "title": "Headline",
        "type": "string",
        "required": false,
        "description": "New headline (max 70 characters)."
      },
      {
        "name": "introductory_text",
        "title": "Introductory Text",
        "type": "string",
        "required": false,
        "description": "New ad copy (max 600 characters)."
      },
      {
        "name": "landing_page_url",
        "title": "Landing Page Url",
        "type": "string",
        "required": false,
        "description": "New destination URL"
      },
      {
        "name": "name",
        "title": "Name",
        "type": "string",
        "required": false,
        "description": "New creative name (shown in Campaign Manager UI)."
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "New status: ACTIVE or PAUSED"
      }
    ]
  },
  {
    "name": "validate_and_prepare_linkedin_assets",
    "platform": "linkedinAds",
    "operationId": "validateAndPrepareLinkedinAssets",
    "displayName": "Validate And Prepare Linkedin Assets",
    "description": "User provides image URLs to validate BEFORE creating LinkedIn image campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"image_urls\" has unsupported type \"array\""
  },
  {
    "name": "add_meta_ad",
    "platform": "metaAds",
    "operationId": "addMetaAd",
    "displayName": "Add Meta Ad",
    "description": "User wants to add another ad/creative variation to an EXISTING ad set [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"cards\" has unsupported type \"array\""
  },
  {
    "name": "add_meta_ad_set",
    "platform": "metaAds",
    "operationId": "addMetaAdSet",
    "displayName": "Add Meta Ad Set",
    "description": "User wants to add a new ad set to an EXISTING campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"behaviors\" has unsupported type \"array\""
  },
  {
    "name": "analyze_meta_ad_performance",
    "platform": "metaAds",
    "operationId": "analyzeMetaAdPerformance",
    "displayName": "Analyze Meta Ad Performance",
    "description": "User wants detailed analysis of specific Meta ads, creative performance, or wants to identify winning/losing ad varia...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter to specific campaign ID (optional - analyzes all campaigns if not provided)"
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "include_video_metrics",
        "title": "Include Video Metrics",
        "type": "boolean",
        "required": false,
        "description": "Include video completion metrics (25%, 50%, 75%, 100% watched).",
        "default": true
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of ads to return (default 100, max 200).",
        "default": 100
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 14, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "offset",
        "title": "Offset",
        "type": "integer",
        "required": false,
        "description": "Number of ads to skip for pagination (default 0).",
        "default": 0
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "analyze_meta_audiences",
    "platform": "metaAds",
    "operationId": "analyzeMetaAudiences",
    "displayName": "Analyze Meta Audiences",
    "description": "User asks about Meta/Facebook/Instagram audience performance by demographics, age group or gender targeting optimizat...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "breakdown_type",
        "title": "Breakdown Type",
        "type": "string",
        "required": false,
        "description": "Type of audience breakdown: 'age' (age groups), 'gender', 'age_gender' (combined), or 'all' (default).",
        "default": "all"
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "include_saturation",
        "title": "Include Saturation",
        "type": "boolean",
        "required": false,
        "description": "Include audience saturation analysis for lookalike and custom audiences (default: True).",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 14, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Optional target ROAS override (e.g., 3.0 for 3.0x ROAS)."
      }
    ]
  },
  {
    "name": "analyze_meta_wasted_spend",
    "platform": "metaAds",
    "operationId": "analyzeMetaWastedSpend",
    "displayName": "Analyze Meta Wasted Spend",
    "description": "User asks about Meta/Facebook/Instagram ad spend efficiency, wasted money, underperforming campaigns, placement optim...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "include_fatigue",
        "title": "Include Fatigue",
        "type": "boolean",
        "required": false,
        "description": "Include creative fatigue analysis.",
        "default": true
      },
      {
        "name": "include_placements",
        "title": "Include Placements",
        "type": "boolean",
        "required": false,
        "description": "Include placement-level analysis (Feed, Stories, Reels, etc.).",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 30, 60, 90, or 120 days).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Optional target ROAS override (e.g., 3.0 for 3.0x ROAS)."
      }
    ]
  },
  {
    "name": "browse_meta_targeting",
    "platform": "metaAds",
    "operationId": "browseMetaTargeting",
    "displayName": "Browse Meta Targeting",
    "description": "User wants to browse all targeting options in a specific category without a search query",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "category",
        "title": "Category",
        "type": "string",
        "required": true,
        "description": "Category to browse: - 'interests': Browse all interest categories - 'behaviors': Browse all behavior categories - 'demographics': Browse all demographic categor…"
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of results to return (1-500).",
        "default": 100
      },
      {
        "name": "locale",
        "title": "Locale",
        "type": "string",
        "required": false,
        "description": "Locale for results (e.g., 'en_US', 'es_ES').",
        "default": "en_US"
      }
    ]
  },
  {
    "name": "create_meta_carousel_campaign",
    "platform": "metaAds",
    "operationId": "createMetaCarouselCampaign",
    "displayName": "Create Meta Carousel Campaign",
    "description": "User wants to create a Meta (Facebook/Instagram) carousel ad campaign with multiple images [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"behaviors\" has unsupported type \"array\""
  },
  {
    "name": "create_meta_dco_ad",
    "platform": "metaAds",
    "operationId": "createMetaDcoAd",
    "displayName": "Create Meta Dco Ad",
    "description": "User wants Meta to automatically TEST MULTIPLE IMAGES and find the best combination [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"descriptions\" has unsupported type \"array\""
  },
  {
    "name": "create_meta_image_campaign",
    "platform": "metaAds",
    "operationId": "createMetaImageCampaign",
    "displayName": "Create Meta Image Campaign",
    "description": "User wants to create a Meta (Facebook/Instagram) single-image ad campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"behaviors\" has unsupported type \"array\""
  },
  {
    "name": "create_meta_video_campaign",
    "platform": "metaAds",
    "operationId": "createMetaVideoCampaign",
    "displayName": "Create Meta Video Campaign",
    "description": "User wants to create a Meta (Facebook/Instagram) video ad campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"behaviors\" has unsupported type \"array\""
  },
  {
    "name": "detect_meta_creative_fatigue",
    "platform": "metaAds",
    "operationId": "detectMetaCreativeFatigue",
    "displayName": "Detect Meta Creative Fatigue",
    "description": "User asks about creative fatigue, ad refresh timing, frequency management, declining CTR, when to replace ads, or aud...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "ctr_decline_threshold",
        "title": "Ctr Decline Threshold",
        "type": "number",
        "required": false,
        "description": "CTR decline threshold to flag as fatigued (0.10-0.50 = 10%-50%).",
        "default": 0.2
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "frequency_threshold_cold",
        "title": "Frequency Threshold Cold",
        "type": "number",
        "required": false,
        "description": "Frequency threshold for cold traffic audiences (2.0-8.0).",
        "default": 4
      },
      {
        "name": "frequency_threshold_retargeting",
        "title": "Frequency Threshold Retargeting",
        "type": "number",
        "required": false,
        "description": "Frequency threshold for retargeting audiences (4.0-10.0).",
        "default": 7
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 14, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "discover_meta_assets",
    "platform": "metaAds",
    "operationId": "discoverMetaAssets",
    "displayName": "Discover Meta Assets",
    "description": "User wants to browse existing images in their Meta Ad Library for reuse in new campaigns",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of assets to return (default 50, max 100)",
        "default": 50
      }
    ]
  },
  {
    "name": "duplicate_meta_campaign",
    "platform": "metaAds",
    "operationId": "duplicateMetaCampaign",
    "displayName": "Duplicate Meta Campaign",
    "description": "User wants to duplicate/copy an existing Meta campaign with all its ad sets, ads, and settings [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Meta Campaign ID to duplicate (required)"
      },
      {
        "name": "new_name",
        "title": "New Name",
        "type": "string",
        "required": false,
        "description": "Name for the new campaign (optional - defaults to original name + ' - Copy')"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "Status for the new campaign: 'PAUSED' (default, recommended for review) or 'ACTIVE'",
        "default": "PAUSED"
      }
    ]
  },
  {
    "name": "explain_meta_anomaly",
    "platform": "metaAds",
    "operationId": "explainMetaAnomaly",
    "displayName": "Explain Meta Anomaly",
    "description": "User asks why Meta/Facebook/Instagram performance dropped or changed, what happened to their ROAS/CTR/CPM, or wants t...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "metric",
        "title": "Metric",
        "type": "string",
        "required": false,
        "description": "Metric to analyze: 'roas', 'ctr', 'cpc', 'cpm', 'conversions', 'conversion_rate', 'frequency', or 'reach'.",
        "default": "ctr"
      },
      {
        "name": "period_end",
        "title": "Period End",
        "type": "string",
        "required": false,
        "description": "End date of anomaly period (ISO format: YYYY-MM-DD)."
      },
      {
        "name": "period_start",
        "title": "Period Start",
        "type": "string",
        "required": false,
        "description": "Start date of anomaly period (ISO format: YYYY-MM-DD)."
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      }
    ]
  },
  {
    "name": "get_meta_ad_creatives",
    "platform": "metaAds",
    "operationId": "getMetaAdCreatives",
    "displayName": "Get Meta Ad Creatives",
    "description": "User wants to see their Meta ad creatives, ad copy, media URLs, or creative performance",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "ad_set_id",
        "title": "Ad Set Id",
        "type": "string",
        "required": false,
        "description": "Filter to specific ad set ID (optional)"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter to specific campaign ID (optional)"
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of ads to return per page (default 20, max 50).",
        "default": 20
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 14, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "offset",
        "title": "Offset",
        "type": "integer",
        "required": false,
        "description": "Number of ads to skip for pagination (default 0).",
        "default": 0
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "get_meta_audience_insights",
    "platform": "metaAds",
    "operationId": "getMetaAudienceInsights",
    "displayName": "Get Meta Audience Insights",
    "description": "User asks about audience demographics, which placements perform best, device breakdown, or targeting optimization for...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "breakdown_type",
        "title": "Breakdown Type",
        "type": "string",
        "required": false,
        "description": "Type of breakdown: 'age', 'gender', 'placement', 'device', or 'all' (default).",
        "default": "all"
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 14, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "get_meta_campaign_details",
    "platform": "metaAds",
    "operationId": "getMetaCampaignDetails",
    "displayName": "Get Meta Campaign Details",
    "description": "User wants to see detailed information about a specific Meta campaign, including its full structure (ad sets, ads, ta...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Meta Campaign ID to get details for (required)"
      },
      {
        "name": "include_hierarchy",
        "title": "Include Hierarchy",
        "type": "boolean",
        "required": false,
        "description": "Include full hierarchy with ad sets and ads (default: false).",
        "default": false
      }
    ]
  },
  {
    "name": "get_meta_campaign_performance",
    "platform": "metaAds",
    "operationId": "getMetaCampaignPerformance",
    "displayName": "Get Meta Campaign Performance",
    "description": "User asks about Meta/Facebook/Instagram ad performance, campaign metrics, ROAS, spend analysis, or wants to understan...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "include_recommendations",
        "title": "Include Recommendations",
        "type": "boolean",
        "required": false,
        "description": "Include optimization recommendations.",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 14, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      }
    ]
  },
  {
    "name": "get_meta_lead_form_submissions",
    "platform": "metaAds",
    "operationId": "getMetaLeadFormSubmissions",
    "displayName": "Get Meta Lead Form Submissions",
    "description": "User wants to see lead submissions, lead data, or leads collected from a Meta lead form",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "form_id",
        "title": "Form Id",
        "type": "string",
        "required": true,
        "description": "Lead form ID (required)."
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of lead submissions to return (default: 100)",
        "default": 100
      }
    ]
  },
  {
    "name": "list_meta_ad_sets",
    "platform": "metaAds",
    "operationId": "listMetaAdSets",
    "displayName": "List Meta Ad Sets",
    "description": "User wants to see the ad sets within a specific Meta campaign, including their targeting, budgets, and optimization s...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter ad sets to a specific campaign ID (optional - if not provided, lists all ad sets in the account)"
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of ad sets to return (default: 100)",
        "default": 100
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "Filter by status: comma-separated values like 'ACTIVE,PAUSED'"
      }
    ]
  },
  {
    "name": "list_meta_ads",
    "platform": "metaAds",
    "operationId": "listMetaAds",
    "displayName": "List Meta Ads",
    "description": "User wants to see the individual ads within a specific Meta ad set, including their status and creative information",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "ad_set_id",
        "title": "Ad Set Id",
        "type": "string",
        "required": false,
        "description": "Filter ads to a specific ad set ID"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter ads to a specific campaign ID"
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of ads to return (default: 100)",
        "default": 100
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "Filter by status: comma-separated values like 'ACTIVE,PAUSED'"
      }
    ]
  },
  {
    "name": "list_meta_campaigns",
    "platform": "metaAds",
    "operationId": "listMetaCampaigns",
    "displayName": "List Meta Campaigns",
    "description": "User wants to see their existing Meta/Facebook/Instagram campaigns, browse campaign structure, or find a campaign ID",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "effective_status",
        "title": "Effective Status",
        "type": "string",
        "required": false,
        "description": "Filter by effective status: comma-separated values."
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of campaigns to return (default: 100, max: 500)",
        "default": 100
      },
      {
        "name": "objective",
        "title": "Objective",
        "type": "string",
        "required": false,
        "description": "Filter by campaign objective: OUTCOME_TRAFFIC, OUTCOME_SALES, OUTCOME_LEADS, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "Filter by status: comma-separated values like 'ACTIVE,PAUSED'."
      }
    ]
  },
  {
    "name": "list_meta_custom_audiences",
    "platform": "metaAds",
    "operationId": "listMetaCustomAudiences",
    "displayName": "List Meta Custom Audiences",
    "description": "User wants to browse, list, or select Custom Audiences for targeting — DB lists, lookalike audiences, remarketing seg...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      }
    ]
  },
  {
    "name": "list_meta_instagram_accounts",
    "platform": "metaAds",
    "operationId": "listMetaInstagramAccounts",
    "displayName": "List Meta Instagram Accounts",
    "description": "User wants to run ads on Instagram, asks about Instagram accounts, or you need to find the instagram_account_id befor...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta ad account ID (e.g., 'act_123456')."
      }
    ]
  },
  {
    "name": "list_meta_lead_forms",
    "platform": "metaAds",
    "operationId": "listMetaLeadForms",
    "displayName": "List Meta Lead Forms",
    "description": "User wants to see their Meta lead generation forms, list lead forms, or find a lead form ID",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of lead forms to return (default: 50)",
        "default": 50
      },
      {
        "name": "page_id",
        "title": "Page Id",
        "type": "string",
        "required": false,
        "description": "Facebook Page ID that owns the lead forms."
      }
    ]
  },
  {
    "name": "list_meta_pixels",
    "platform": "metaAds",
    "operationId": "listMetaPixels",
    "displayName": "List Meta Pixels",
    "description": "User wants conversion tracking, asks about Meta Pixels, or before creating OUTCOME_SALES campaigns",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta ad account ID (e.g., 'act_123456')."
      }
    ]
  },
  {
    "name": "optimize_meta_budget",
    "platform": "metaAds",
    "operationId": "optimizeMetaBudget",
    "displayName": "Optimize Meta Budget",
    "description": "User asks about Meta/Facebook/Instagram budget optimization, reallocating ad spend, maximizing conversions with their...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze for historical performance (7, 30, 60, 90, or 120 days).",
        "default": 30
      },
      {
        "name": "max_change_percentage",
        "title": "Max Change Percentage",
        "type": "number",
        "required": false,
        "description": "Maximum allowed budget change per campaign as decimal (0.3 for ±30%, 0.5 for ±50%, 0.7 for ±70%).",
        "default": 0.5
      },
      {
        "name": "min_daily_budget",
        "title": "Min Daily Budget",
        "type": "number",
        "required": false,
        "description": "Minimum daily budget per campaign in dollars.",
        "default": 5
      },
      {
        "name": "optimization_level",
        "title": "Optimization Level",
        "type": "string",
        "required": false,
        "description": "Level of optimization: 'campaign' (default) or 'ad_set'.",
        "default": "campaign"
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Optional target ROAS override (e.g., 2.0 for 2.0x ROAS)."
      },
      {
        "name": "total_budget",
        "title": "Total Budget",
        "type": "number",
        "required": true,
        "description": "Total monthly budget to allocate across campaigns (in dollars)."
      }
    ]
  },
  {
    "name": "optimize_meta_placements",
    "platform": "metaAds",
    "operationId": "optimizeMetaPlacements",
    "displayName": "Optimize Meta Placements",
    "description": "User asks about Meta/Facebook/Instagram placement performance, which placements work best, Feed vs Stories vs Reels, ...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "date_range",
        "title": "Date Range",
        "type": "string",
        "required": false,
        "description": "Date range preset: 'last_7_days', 'last_14_days', 'last_30_days', 'last_60_days', 'last_90_days'."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date (YYYY-MM-DD)."
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to analyze (7, 14, 30, 60, or 90 days).",
        "default": 30
      },
      {
        "name": "objective",
        "title": "Objective",
        "type": "string",
        "required": false,
        "description": "Campaign objective for optimal placement mix recommendations: 'conversions' (default), 'traffic', or 'awareness'.",
        "default": "conversions"
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (spend, clicks, impressions, conversions, CPA, CPC, CTR, CVR, ROAS by campaign/ad/date).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date (YYYY-MM-DD)."
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Optional target ROAS override (e.g., 3.0 for 3.0x ROAS)."
      }
    ]
  },
  {
    "name": "pause_meta_campaign",
    "platform": "metaAds",
    "operationId": "pauseMetaCampaign",
    "displayName": "Pause Meta Campaign",
    "description": "User wants to pause a running Meta campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Meta Campaign ID to pause (required)"
      }
    ]
  },
  {
    "name": "resume_meta_campaign",
    "platform": "metaAds",
    "operationId": "resumeMetaCampaign",
    "displayName": "Resume Meta Campaign",
    "description": "User wants to resume a paused Meta campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Meta Campaign ID to resume (required)"
      }
    ]
  },
  {
    "name": "search_meta_targeting",
    "platform": "metaAds",
    "operationId": "searchMetaTargeting",
    "displayName": "Search Meta Targeting",
    "description": "User wants to find targeting options for their Meta (Facebook/Instagram) ad campaigns",
    "readOnly": true,
    "destructive": false,
    "args": [],
    "skipped": "arg \"location_types\" has unsupported type \"array\""
  },
  {
    "name": "select_meta_campaign_type",
    "platform": "metaAds",
    "operationId": "selectMetaCampaignType",
    "displayName": "Select Meta Campaign Type",
    "description": "User wants to create a Meta (Facebook/Instagram) ad campaign but hasn't specified the campaign type (image, video, or...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "campaign_type",
        "title": "Campaign Type",
        "type": "string",
        "required": true,
        "description": "Type of Meta campaign to create."
      }
    ]
  },
  {
    "name": "update_meta_ad",
    "platform": "metaAds",
    "operationId": "updateMetaAd",
    "displayName": "Update Meta Ad",
    "description": "User wants to update an individual Meta ad — pause/resume it, rename it, or swap its creative [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "ad_id",
        "title": "Ad Id",
        "type": "string",
        "required": true,
        "description": "The Meta Ad ID to update (required)"
      },
      {
        "name": "creative_id",
        "title": "Creative Id",
        "type": "string",
        "required": false,
        "description": "New creative ID for creative swap."
      },
      {
        "name": "name",
        "title": "Name",
        "type": "string",
        "required": false,
        "description": "New ad name"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "New status: 'ACTIVE', 'PAUSED', 'DELETED', 'ARCHIVED'"
      }
    ]
  },
  {
    "name": "update_meta_ad_set",
    "platform": "metaAds",
    "operationId": "updateMetaAdSet",
    "displayName": "Update Meta Ad Set",
    "description": "User wants to edit an existing Meta ad set's targeting, budget, bid, placements, schedule, or optimization settings [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"targeting\" has unsupported type \"object\""
  },
  {
    "name": "update_meta_campaign",
    "platform": "metaAds",
    "operationId": "updateMetaCampaign",
    "displayName": "Update Meta Campaign",
    "description": "User wants to update an existing Meta campaign's status, budget, name, or schedule [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_account_id",
        "title": "Ad Account Id",
        "type": "string",
        "required": false,
        "description": "Meta Ad Account ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "The Meta Campaign ID to update (required)"
      },
      {
        "name": "daily_budget",
        "title": "Daily Budget",
        "type": "number",
        "required": false,
        "description": "New daily budget in USD (optional, minimum $1)"
      },
      {
        "name": "lifetime_budget",
        "title": "Lifetime Budget",
        "type": "number",
        "required": false,
        "description": "New lifetime budget in USD (optional)"
      },
      {
        "name": "name",
        "title": "Name",
        "type": "string",
        "required": false,
        "description": "New campaign name (optional)"
      },
      {
        "name": "start_time",
        "title": "Start Time",
        "type": "string",
        "required": false,
        "description": "New start time in ISO format YYYY-MM-DDTHH:MM:SS (optional)"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "New status: 'ACTIVE', 'PAUSED' (optional)"
      },
      {
        "name": "stop_time",
        "title": "Stop Time",
        "type": "string",
        "required": false,
        "description": "New stop time in ISO format YYYY-MM-DDTHH:MM:SS (optional)"
      }
    ]
  },
  {
    "name": "validate_and_prepare_meta_assets",
    "platform": "metaAds",
    "operationId": "validateAndPrepareMetaAssets",
    "displayName": "Validate And Prepare Meta Assets",
    "description": "User wants to upload NEW images for Meta campaigns [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"image_urls\" has unsupported type \"array\""
  },
  {
    "name": "add_tiktok_ad",
    "platform": "tiktokAds",
    "operationId": "addTiktokAd",
    "displayName": "Add Tiktok Ad",
    "description": "Add a new ad to an existing TikTok ad group [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"image_ids\" has unsupported type \"array\""
  },
  {
    "name": "add_tiktok_ad_group",
    "platform": "tiktokAds",
    "operationId": "addTiktokAdGroup",
    "displayName": "Add Tiktok Ad Group",
    "description": "Add a new ad group to an existing TikTok campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"age_groups\" has unsupported type \"array\""
  },
  {
    "name": "analyze_tiktok_geo_performance",
    "platform": "tiktokAds",
    "operationId": "analyzeTiktokGeoPerformance",
    "displayName": "Analyze Tiktok Geo Performance",
    "description": "Analyze TikTok geographic/country-level performance",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date YYYY-MM-DD"
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Days to analyze",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date YYYY-MM-DD"
      }
    ]
  },
  {
    "name": "analyze_tiktok_wasted_spend",
    "platform": "tiktokAds",
    "operationId": "analyzeTiktokWastedSpend",
    "displayName": "Analyze Tiktok Wasted Spend",
    "description": "Analyze TikTok campaigns for wasted ad spend",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date YYYY-MM-DD"
      },
      {
        "name": "include_fatigue",
        "title": "Include Fatigue",
        "type": "boolean",
        "required": false,
        "description": "Include creative fatigue analysis",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Days to analyze: 7, 30, 60, 90, 120",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date YYYY-MM-DD"
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Target ROAS override (e.g., 3.0)"
      }
    ]
  },
  {
    "name": "create_tiktok_campaign",
    "platform": "tiktokAds",
    "operationId": "createTiktokCampaign",
    "displayName": "Create Tiktok Campaign",
    "description": "User wants to create a TikTok ad campaign with IMAGES, Spark Ads, or Carousel ads (not video) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"audience_ids\" has unsupported type \"array\""
  },
  {
    "name": "create_tiktok_carousel_card",
    "platform": "tiktokAds",
    "operationId": "createTiktokCarouselCard",
    "displayName": "Create Tiktok Carousel Card",
    "description": "Create a carousel card from multiple images for TikTok carousel ads [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"ad_texts\" has unsupported type \"array\""
  },
  {
    "name": "create_tiktok_video_campaign",
    "platform": "tiktokAds",
    "operationId": "createTiktokVideoCampaign",
    "displayName": "Create Tiktok Video Campaign",
    "description": "User wants to create a TikTok ad campaign with a VIDEO (not images) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"audience_ids\" has unsupported type \"array\""
  },
  {
    "name": "detect_tiktok_creative_fatigue",
    "platform": "tiktokAds",
    "operationId": "detectTiktokCreativeFatigue",
    "displayName": "Detect Tiktok Creative Fatigue",
    "description": "Detect TikTok creative fatigue using video-specific metrics (hook rate decline, completion rate decline, engagement d...",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date YYYY-MM-DD"
      },
      {
        "name": "frequency_threshold",
        "title": "Frequency Threshold",
        "type": "number",
        "required": false,
        "description": "Override frequency threshold (default 3.5)"
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Days to analyze",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date YYYY-MM-DD"
      }
    ]
  },
  {
    "name": "discover_tiktok_assets",
    "platform": "tiktokAds",
    "operationId": "discoverTiktokAssets",
    "displayName": "Discover Tiktok Assets",
    "description": "User wants to reuse existing TikTok images instead of uploading new ones",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID (optional - will use primary account if not provided)"
      }
    ]
  },
  {
    "name": "explain_tiktok_anomaly",
    "platform": "tiktokAds",
    "operationId": "explainTiktokAnomaly",
    "displayName": "Explain Tiktok Anomaly",
    "description": "Explain why a TikTok metric changed during a specific period",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "metric",
        "title": "Metric",
        "type": "string",
        "required": false,
        "description": "Metric: roas, ctr, cpc, cpm, conversions, hook_rate, engagement_rate",
        "default": "ctr"
      },
      {
        "name": "period_end",
        "title": "Period End",
        "type": "string",
        "required": true,
        "description": "Anomaly period end YYYY-MM-DD"
      },
      {
        "name": "period_start",
        "title": "Period Start",
        "type": "string",
        "required": true,
        "description": "Anomaly period start YYYY-MM-DD"
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      }
    ]
  },
  {
    "name": "get_tiktok_ad_performance",
    "platform": "tiktokAds",
    "operationId": "getTiktokAdPerformance",
    "displayName": "Get Tiktok Ad Performance",
    "description": "Get TikTok ad-level performance with creative details, video metrics, and engagement",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date YYYY-MM-DD"
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Max ads to return (1-50)",
        "default": 20
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Days to analyze",
        "default": 30
      },
      {
        "name": "offset",
        "title": "Offset",
        "type": "integer",
        "required": false,
        "description": "Pagination offset",
        "default": 0
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date YYYY-MM-DD"
      }
    ]
  },
  {
    "name": "get_tiktok_audience_insights",
    "platform": "tiktokAds",
    "operationId": "getTiktokAudienceInsights",
    "displayName": "Get Tiktok Audience Insights",
    "description": "Analyze TikTok audience segment performance by age, gender, and combined demographics",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "breakdown_type",
        "title": "Breakdown Type",
        "type": "string",
        "required": false,
        "description": "Breakdown: age, gender, age_gender, or all",
        "default": "all"
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date YYYY-MM-DD"
      },
      {
        "name": "include_saturation",
        "title": "Include Saturation",
        "type": "boolean",
        "required": false,
        "description": "Include saturation trend analysis",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Days to analyze",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date YYYY-MM-DD"
      }
    ]
  },
  {
    "name": "get_tiktok_campaign_details",
    "platform": "tiktokAds",
    "operationId": "getTiktokCampaignDetails",
    "displayName": "Get Tiktok Campaign Details",
    "description": "Get detailed information about a specific TikTok campaign including status, budget, objective, and timestamps",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "TikTok campaign ID"
      }
    ]
  },
  {
    "name": "get_tiktok_campaign_performance",
    "platform": "tiktokAds",
    "operationId": "getTiktokCampaignPerformance",
    "displayName": "Get Tiktok Campaign Performance",
    "description": "Get TikTok campaign performance metrics including TikTok-specific video and engagement data",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date YYYY-MM-DD (overrides lookback_days)"
      },
      {
        "name": "include_recommendations",
        "title": "Include Recommendations",
        "type": "boolean",
        "required": false,
        "description": "Include optimization recommendations",
        "default": true
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Days to analyze: 7, 14, 30, 60, or 90",
        "default": 30
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date YYYY-MM-DD (overrides lookback_days)"
      }
    ]
  },
  {
    "name": "list_tiktok_ad_groups",
    "platform": "tiktokAds",
    "operationId": "listTiktokAdGroups",
    "displayName": "List Tiktok Ad Groups",
    "description": "List TikTok ad groups",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter by campaign ID (optional)"
      }
    ]
  },
  {
    "name": "list_tiktok_ads",
    "platform": "tiktokAds",
    "operationId": "listTiktokAds",
    "displayName": "List Tiktok Ads",
    "description": "List TikTok ads",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "adgroup_id",
        "title": "Adgroup Id",
        "type": "string",
        "required": false,
        "description": "Filter by ad group ID (optional)"
      },
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": false,
        "description": "Filter by campaign ID (optional)"
      }
    ]
  },
  {
    "name": "list_tiktok_campaigns",
    "platform": "tiktokAds",
    "operationId": "listTiktokCampaigns",
    "displayName": "List Tiktok Campaigns",
    "description": "List all TikTok campaigns with their status, objective, and budget",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      }
    ]
  },
  {
    "name": "optimize_tiktok_budget",
    "platform": "tiktokAds",
    "operationId": "optimizeTiktokBudget",
    "displayName": "Optimize Tiktok Budget",
    "description": "Optimize TikTok budget allocation using linear programming to maximize conversions",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "end_date",
        "title": "End Date",
        "type": "string",
        "required": false,
        "description": "End date YYYY-MM-DD"
      },
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Days to analyze for historical performance",
        "default": 30
      },
      {
        "name": "max_change_percentage",
        "title": "Max Change Percentage",
        "type": "number",
        "required": false,
        "description": "Max budget change per campaign (0.3=conservative, 0.7=aggressive)",
        "default": 0.5
      },
      {
        "name": "min_daily_budget",
        "title": "Min Daily Budget",
        "type": "number",
        "required": false,
        "description": "Minimum daily budget per campaign",
        "default": 5
      },
      {
        "name": "raw_data",
        "title": "Raw Data",
        "type": "boolean",
        "required": false,
        "description": "If true, return ONLY raw metrics as a JSON code block (no severity labels, suggested bids/budgets, industry benchmarks, or optimization recommendations).",
        "default": false
      },
      {
        "name": "start_date",
        "title": "Start Date",
        "type": "string",
        "required": false,
        "description": "Start date YYYY-MM-DD"
      },
      {
        "name": "target_roas",
        "title": "Target Roas",
        "type": "number",
        "required": false,
        "description": "Target ROAS override"
      },
      {
        "name": "total_budget",
        "title": "Total Budget",
        "type": "number",
        "required": true,
        "description": "Total monthly budget to allocate"
      }
    ]
  },
  {
    "name": "pause_tiktok_ad",
    "platform": "tiktokAds",
    "operationId": "pauseTiktokAd",
    "displayName": "Pause Tiktok Ad",
    "description": "Pause a TikTok ad [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_id",
        "title": "Ad Id",
        "type": "string",
        "required": true,
        "description": "TikTok ad ID"
      },
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "New status: 'ENABLE' (resume), 'DISABLE' (pause), or 'DELETE'"
      }
    ]
  },
  {
    "name": "pause_tiktok_ad_group",
    "platform": "tiktokAds",
    "operationId": "pauseTiktokAdGroup",
    "displayName": "Pause Tiktok Ad Group",
    "description": "Pause a TikTok ad group [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "adgroup_id",
        "title": "Adgroup Id",
        "type": "string",
        "required": true,
        "description": "TikTok ad group ID"
      },
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "New status: 'ENABLE' (resume), 'DISABLE' (pause), or 'DELETE'"
      }
    ]
  },
  {
    "name": "pause_tiktok_campaign",
    "platform": "tiktokAds",
    "operationId": "pauseTiktokCampaign",
    "displayName": "Pause Tiktok Campaign",
    "description": "Pause a TikTok campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "TikTok campaign ID"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "New status: 'ENABLE' (resume), 'DISABLE' (pause), or 'DELETE'"
      }
    ]
  },
  {
    "name": "resume_tiktok_ad",
    "platform": "tiktokAds",
    "operationId": "resumeTiktokAd",
    "displayName": "Resume Tiktok Ad",
    "description": "Resume a paused TikTok ad [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "ad_id",
        "title": "Ad Id",
        "type": "string",
        "required": true,
        "description": "TikTok ad ID"
      },
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "New status: 'ENABLE' (resume), 'DISABLE' (pause), or 'DELETE'"
      }
    ]
  },
  {
    "name": "resume_tiktok_ad_group",
    "platform": "tiktokAds",
    "operationId": "resumeTiktokAdGroup",
    "displayName": "Resume Tiktok Ad Group",
    "description": "Resume a paused TikTok ad group [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "adgroup_id",
        "title": "Adgroup Id",
        "type": "string",
        "required": true,
        "description": "TikTok ad group ID"
      },
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "New status: 'ENABLE' (resume), 'DISABLE' (pause), or 'DELETE'"
      }
    ]
  },
  {
    "name": "resume_tiktok_campaign",
    "platform": "tiktokAds",
    "operationId": "resumeTiktokCampaign",
    "displayName": "Resume Tiktok Campaign",
    "description": "Resume a paused TikTok campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "TikTok campaign ID"
      },
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "New status: 'ENABLE' (resume), 'DISABLE' (pause), or 'DELETE'"
      }
    ]
  },
  {
    "name": "search_tiktok_targeting",
    "platform": "tiktokAds",
    "operationId": "searchTiktokTargeting",
    "displayName": "Search Tiktok Targeting",
    "description": "Search TikTok targeting options for campaign creation and ad group management",
    "readOnly": true,
    "destructive": false,
    "args": [],
    "skipped": "arg \"placements\" has unsupported type \"array\""
  },
  {
    "name": "update_tiktok_ad_group",
    "platform": "tiktokAds",
    "operationId": "updateTiktokAdGroup",
    "displayName": "Update Tiktok Ad Group",
    "description": "Update TikTok ad group settings: name, budget, targeting (age, gender, locations), schedule [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"age_groups\" has unsupported type \"array\""
  },
  {
    "name": "update_tiktok_campaign",
    "platform": "tiktokAds",
    "operationId": "updateTiktokCampaign",
    "displayName": "Update Tiktok Campaign",
    "description": "Update TikTok campaign settings like name, budget, or budget mode [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "advertiser_id",
        "title": "Advertiser Id",
        "type": "string",
        "required": false,
        "description": "TikTok advertiser ID."
      },
      {
        "name": "budget",
        "title": "Budget",
        "type": "number",
        "required": false,
        "description": "New daily budget in account currency"
      },
      {
        "name": "budget_mode",
        "title": "Budget Mode",
        "type": "string",
        "required": false,
        "description": "BUDGET_MODE_DAY or BUDGET_MODE_TOTAL"
      },
      {
        "name": "campaign_id",
        "title": "Campaign Id",
        "type": "string",
        "required": true,
        "description": "TikTok campaign ID"
      },
      {
        "name": "name",
        "title": "Name",
        "type": "string",
        "required": false,
        "description": "New campaign name"
      }
    ]
  },
  {
    "name": "upload_tiktok_images",
    "platform": "tiktokAds",
    "operationId": "uploadTiktokImages",
    "displayName": "Upload Tiktok Images",
    "description": "Upload images to TikTok Asset Library from public URLs [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"image_urls\" has unsupported type \"array\""
  },
  {
    "name": "validate_and_prepare_tiktok_assets",
    "platform": "tiktokAds",
    "operationId": "validateAndPrepareTiktokAssets",
    "displayName": "Validate And Prepare Tiktok Assets",
    "description": "User provides image URLs to validate BEFORE creating TikTok image campaign [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"image_urls\" has unsupported type \"array\""
  },
  {
    "name": "audit_conversion_tracking",
    "platform": "utility",
    "operationId": "auditConversionTracking",
    "displayName": "Audit Conversion Tracking",
    "description": "Review your conversion tracking setup across ad platforms",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "lookback_days",
        "title": "Lookback Days",
        "type": "integer",
        "required": false,
        "description": "Number of days to look back for trend analysis (7, 14, 30, 60, 90).",
        "default": 30
      },
      {
        "name": "platform",
        "title": "Platform",
        "type": "string",
        "required": false,
        "description": "Ad platform to audit: 'google_ads', 'meta_ads', or 'linkedin_ads'."
      }
    ]
  },
  {
    "name": "create_monitor",
    "platform": "utility",
    "operationId": "createMonitor",
    "displayName": "Create Monitor",
    "description": "Create a monitoring alert for your campaigns [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"campaign_ids\" has unsupported type \"array\""
  },
  {
    "name": "delete_monitor",
    "platform": "utility",
    "operationId": "deleteMonitor",
    "displayName": "Delete Monitor",
    "description": "Delete a monitoring alert by its task ID [write]",
    "readOnly": false,
    "destructive": true,
    "args": [
      {
        "name": "task_id",
        "title": "Task Id",
        "type": "string",
        "required": true,
        "description": "ID of the monitor to delete."
      }
    ]
  },
  {
    "name": "generate_report_now",
    "platform": "utility",
    "operationId": "generateReportNow",
    "displayName": "Generate Report Now",
    "description": "Generate an immediate performance report and deliver it now [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"account_ids\" has unsupported type \"array\""
  },
  {
    "name": "get_connections_status",
    "platform": "utility",
    "operationId": "getConnectionsStatus",
    "displayName": "Get Connections Status",
    "description": "View connected ad accounts and OAuth connections [write]",
    "readOnly": false,
    "destructive": false,
    "args": []
  },
  {
    "name": "get_monitor_history",
    "platform": "utility",
    "operationId": "getMonitorHistory",
    "displayName": "Get Monitor History",
    "description": "Show trigger history for a monitoring alert",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "alert_id",
        "title": "Alert Id",
        "type": "string",
        "required": true,
        "description": "ID of the monitoring alert to get history for"
      },
      {
        "name": "limit",
        "title": "Limit",
        "type": "integer",
        "required": false,
        "description": "Maximum number of trigger records to return."
      }
    ]
  },
  {
    "name": "get_research_status",
    "platform": "utility",
    "operationId": "getResearchStatus",
    "displayName": "Get Research Status",
    "description": "Check the status of a research job",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "job_id",
        "title": "Job Id",
        "type": "string",
        "required": true,
        "description": "ID of the research job"
      }
    ]
  },
  {
    "name": "list_connected_accounts",
    "platform": "utility",
    "operationId": "listConnectedAccounts",
    "displayName": "List Connected Accounts",
    "description": "List all connected ad accounts across platforms [write]",
    "readOnly": false,
    "destructive": false,
    "args": [
      {
        "name": "platform",
        "title": "Platform",
        "type": "string",
        "required": false,
        "description": "Filter by platform: google_ads, meta_ads, tiktok_ads, or linkedin_ads."
      }
    ]
  },
  {
    "name": "list_monitors",
    "platform": "utility",
    "operationId": "listMonitors",
    "displayName": "List Monitors",
    "description": "List all your monitoring alerts",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "Filter by status: 'active', 'paused', or 'all'"
      }
    ]
  },
  {
    "name": "list_pending_actions",
    "platform": "utility",
    "operationId": "listPendingActions",
    "displayName": "List Pending Actions",
    "description": "List auto-actions waiting for your approval",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "Filter: 'pending_approval', 'executed', 'rejected', 'expired', 'all'",
        "default": "pending_approval"
      }
    ]
  },
  {
    "name": "list_scheduled_tasks",
    "platform": "utility",
    "operationId": "listScheduledTasks",
    "displayName": "List Scheduled Tasks",
    "description": "List all your scheduled automation tasks",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "status",
        "title": "Status",
        "type": "string",
        "required": false,
        "description": "Filter by status: 'active', 'paused', or 'all'"
      },
      {
        "name": "task_type",
        "title": "Task Type",
        "type": "string",
        "required": false,
        "description": "Filter by type: 'performance_brief', 'monitoring', 'research'"
      }
    ]
  },
  {
    "name": "manage_action",
    "platform": "utility",
    "operationId": "manageAction",
    "displayName": "Manage Action",
    "description": "Approve or reject a pending auto-action [write]",
    "readOnly": false,
    "destructive": true,
    "args": [
      {
        "name": "action_id",
        "title": "Action Id",
        "type": "string",
        "required": true,
        "description": "ID of the pending action to approve or reject"
      },
      {
        "name": "decision",
        "title": "Decision",
        "type": "string",
        "required": true,
        "description": "'approve' or 'reject'"
      }
    ]
  },
  {
    "name": "manage_scheduled_task",
    "platform": "utility",
    "operationId": "manageScheduledTask",
    "displayName": "Manage Scheduled Task",
    "description": "Manage a scheduled task — pause, resume, or delete [write]",
    "readOnly": false,
    "destructive": true,
    "args": [
      {
        "name": "action",
        "title": "Action",
        "type": "string",
        "required": true,
        "description": "Action to take: 'pause', 'resume', 'delete'"
      },
      {
        "name": "task_id",
        "title": "Task Id",
        "type": "string",
        "required": true,
        "description": "ID of the scheduled task"
      }
    ]
  },
  {
    "name": "schedule_brief",
    "platform": "utility",
    "operationId": "scheduleBrief",
    "displayName": "Schedule Brief",
    "description": "Schedule recurring performance briefs delivered to your inbox [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"platforms\" has unsupported type \"array\""
  },
  {
    "name": "start_research",
    "platform": "utility",
    "operationId": "startResearch",
    "displayName": "Start Research",
    "description": "Start an AI-powered research job (runs in background) [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"context\" has unsupported type \"object\""
  },
  {
    "name": "switch_primary_account",
    "platform": "utility",
    "operationId": "switchPrimaryAccount",
    "displayName": "Switch Primary Account",
    "description": "Activate one or more ad accounts for a platform [write]",
    "readOnly": false,
    "destructive": false,
    "args": [],
    "skipped": "arg \"account_ids\" has unsupported type \"array\""
  },
  {
    "name": "test_monitor",
    "platform": "utility",
    "operationId": "testMonitor",
    "displayName": "Test Monitor",
    "description": "Dry-run a monitor against current data WITHOUT triggering alerts or sending notifications",
    "readOnly": true,
    "destructive": false,
    "args": [
      {
        "name": "alert_id",
        "title": "Alert Id",
        "type": "string",
        "required": true,
        "description": "ID of the monitoring alert to test"
      }
    ]
  }
];
