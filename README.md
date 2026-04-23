# n8n-nodes-adspirer

[![npm](https://img.shields.io/npm/v/n8n-nodes-adspirer)](https://www.npmjs.com/package/n8n-nodes-adspirer)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

[n8n](https://n8n.io/) community node for [Adspirer](https://adspirer.ai) — orchestrate ad campaigns across **Google Ads, Meta, LinkedIn, and TikTok** from any n8n workflow.

Pick a platform, pick an operation, plug in your API key — n8n does the rest.

<p align="center">
  <img src="icons/adspirer.svg" alt="Adspirer" width="80" />
</p>

## Features

- **~120 operations** across 5 resource groups: Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, and Utility diagnostics
- **REST-native** — calls `https://api.adspirer.ai` via standard HTTP + Bearer auth. No SSE, no JSON-RPC
- **Quota-aware** — every response includes your remaining monthly allowance in `$item.json._adspirer_quota`
- **Idempotency built-in** — write operations automatically send an `Idempotency-Key` so retries don't double-charge you or duplicate campaigns
- **AI Agent compatible** — set `usableAsTool: true`, surfaces directly in n8n's AI Agent tool picker
- **Upgrade-aware errors** — a 402 quota response surfaces the Adspirer upgrade URL directly in the node's error output

## Installation

### n8n (Cloud or self-hosted)

1. Open your n8n instance
2. **Settings → Community Nodes → Install a community node**
3. Enter `n8n-nodes-adspirer`
4. Click **Install** — the node appears in the nodes panel under "Adspirer"

The node is searchable by: `Adspirer`, `ads`, `Google Ads`, `Meta Ads`, `LinkedIn Ads`, `TikTok Ads`, `campaign`, `keyword research`, `ppc`.

### Self-hosted via npm

```bash
cd ~/.n8n
npm install n8n-nodes-adspirer
# Restart n8n
```

## Authentication

The node uses an API key. There is currently no OAuth2 option — the hosted REST API doesn't expose public OAuth endpoints yet.

1. Sign up at [adspirer.ai](https://adspirer.ai) — free tier includes 15 tool calls/month, no credit card
2. Generate a key at [adspirer.ai/keys](https://adspirer.ai/keys) — keys are prefixed `sk_live_`, treat them as secrets
3. In n8n: **Credentials → New → Adspirer API**, paste the key, save
4. The credential test runs a free diagnostic call (`list_connected_accounts`) — expect a green ✓

## Usage

After creating the credential:

1. Drop the **Adspirer** node onto any workflow
2. Pick a **Platform** — Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, or Utility
3. Pick an **Operation** from the dropdown (operations are filtered by platform)
4. Fill required fields. Optional fields can be left blank.
5. Execute

Each successful execution returns:

```json
{
  "success": true,
  "platform": "googleAds",
  "operation": "listCampaigns",
  "tool": "list_campaigns",
  "text": "# 📋 Your Google Ads Campaigns\n\n**Total Campaigns:** 10\n...",
  "structured": null,
  "_adspirer_quota": {
    "used": 8,
    "limit": 150,
    "tier": "plus",
    "period_end": "2026-05-17"
  }
}
```

- **`text`** — human-readable markdown summary of the result
- **`structured`** — structured payload when the operation returns one (null otherwise)
- **`_adspirer_quota`** — branch on this in subsequent nodes to avoid hitting your monthly limit

### Error handling

| HTTP code | Meaning | Node behavior |
|---|---|---|
| `200` | Success | returns data |
| `400` | Tool-level error (e.g. missing account) | throws with the error message |
| `401` | Invalid/missing API key | throws with key-regeneration hint |
| `402` | Monthly quota exhausted | throws with `upgrade_url` appended to the message |
| `429` | Upstream ad platform rate-limited us | throws — enable **Retry on Fail** in node settings (30–60s backoff recommended) |
| `5xx` | Server error | throws — enable **Retry on Fail** in node settings |

Use n8n's per-node **Retry on Fail** setting instead of a custom backoff loop — it's the idiomatic pattern and compatible with n8n Cloud's verification requirements.

## Example workflows

### 1. Daily wasted-spend check across all platforms

```
Schedule Trigger (daily 8am)
  → Adspirer: Google Ads → Analyze Wasted Spend (lookback: 7)
  → Adspirer: Meta Ads → Analyze Meta Wasted Spend (lookback: 7)
  → Adspirer: LinkedIn Ads → Analyze LinkedIn Wasted Spend (lookback: 7)
  → Code: merge + threshold check
  → IF > $50 wasted → Slack #marketing
```

### 2. New Shopify product → Google PMax campaign

```
Shopify Trigger (new product)
  → Adspirer: Google Ads → Create PMax Campaign
     (name: {{ $json.title }}, budget: 30, final_url: {{ $json.url }})
  → Slack: post campaign link
  → Google Sheets: log in tracker
```

### 3. Weekly cross-platform report to Google Sheets

```
Schedule Trigger (Monday 9am)
  → Adspirer: Google Ads → Get Campaign Performance (lookback: 7)
  → Adspirer: Meta Ads → Analyze Meta Ad Performance (lookback: 7)
  → Code: normalize metrics
  → Google Sheets: append row
  → Gmail: send to client
```

### 4. Quota-aware agent loop

```
Manual Trigger
  → Adspirer: Utility → Get Usage Status
  → IF _adspirer_quota.used < _adspirer_quota.limit * 0.8
     Yes → AI Agent with Adspirer tool
     No  → Slack: "Quota near limit, skipping optimization run"
```

### 5. HubSpot deal won → LinkedIn retargeting

```
HubSpot Trigger (deal stage = "Closed Won")
  → Adspirer: LinkedIn Ads → Add LinkedIn Creative (custom ad for customer)
  → Adspirer: LinkedIn Ads → Create LinkedIn Sponsored Content
  → Slack: notify account manager
```

## AI Agent usage

Every Adspirer operation is available as an AI Agent tool (`usableAsTool: true`). Add the Adspirer node to an **AI Agent** node's tool slot, configure the agent's model (Claude / GPT-4 / etc.), and the agent can pick operations from natural-language instructions:

```
Chat Trigger (Slack)
  → AI Agent (Claude)
     tools: Adspirer, Google Sheets
  → Slack reply
```

**Example prompts that work:**
- *"What are my top 3 Google Ads campaigns by ROAS this week?"*
- *"Find wasted spend across all my Meta ad sets over the last 30 days"*
- *"List all my connected ad accounts"*

For **full agentic access to all ~180 Adspirer tools** (including ones that stream their response and aren't exposed by this REST-based node), use the [`n8n-nodes-mcp`](https://www.npmjs.com/package/n8n-nodes-mcp) community node pointed at `https://mcp.adspirer.com/mcp` with your `sk_live_` key as the Bearer token.

## Operations summary

| Platform | Exposed | Notes |
|---|---|---|
| Google Ads | ~28 | Analytics, search term / keyword research, campaign ops, demand-gen |
| Meta Ads | ~27 | Ad/audience analytics, campaign creation (single + carousel + DCO) |
| LinkedIn Ads | ~32 | Creatives, campaign groups, conversions, lead forms, wasted spend |
| TikTok Ads | ~20 | Campaign creation, geo/creative fatigue analytics |
| Utility | ~12 | Diagnostics: `list_connected_accounts`, `get_usage_status`, monitors, audits |

**~60 additional tools** (complex creatives, asset bundles, detailed audience targeting) are exposed via the [REST API](https://api.adspirer.ai/docs) directly — those use array/object argument shapes that don't flatten into n8n's field UI. Invoke them with n8n's built-in **HTTP Request** node pointed at `POST https://api.adspirer.ai/api/v1/tools/{tool_name}/execute` using the same Adspirer API credential.

Live OpenAPI spec: https://api.adspirer.ai/openapi.json — regenerated automatically whenever the surface changes upstream.

## Pricing

| Plan | Tool calls / month | Price |
|---|---|---|
| Free | 15 | $0 |
| Plus | 150 | $49/mo |
| Pro | 600 | $99/mo |
| Max | 3,000 | $199/mo |

Sign up at [adspirer.ai](https://adspirer.ai).

## Related

- **[Adspirer MCP server](https://mcp.adspirer.com/mcp)** — the canonical tool surface, consumed by ChatGPT Connectors, Claude Desktop, and Claude Code. For n8n agentic workflows, use [`n8n-nodes-mcp`](https://www.npmjs.com/package/n8n-nodes-mcp) pointed at this URL.
- **[REST API docs](https://www.adspirer.com/docs/api-reference/introduction)** — full endpoint reference, envelope, rate limits
- **[adspirer.com](https://adspirer.com)** — product overview

## Development

### Prerequisites

- Node.js 22 LTS (required — Node 25 has compatibility issues with n8n-core's `isolated-vm` dependency)
- npm

### Setup

```bash
git clone https://github.com/amekala/n8n-nodes-adspirer.git
cd n8n-nodes-adspirer
nvm use 22            # if using nvm
npm install
```

### Commands

```bash
npm run codegen       # Regenerate operations from api.adspirer.ai/openapi.json
npm run build         # Compile TypeScript → dist/
npm run lint          # n8n community-node lint (must pass for verification)
npm run lint:fix      # Autofix lint issues
npm run dev           # Local n8n on :5678 with this node hot-reloaded
npm run release       # Bump version, tag, push → GH Action publishes to npm
```

### How operations are generated

`npm run codegen` fetches `https://api.adspirer.ai/openapi.json`, filters tool endpoints, and emits `nodes/Adspirer/generated/tools.ts` — a typed metadata array. `shared/build-properties.ts` then turns that metadata into n8n's `INodeProperties[]` at module load:

- One **Platform** dropdown (5 options)
- One **Operation** dropdown per platform, filtered by `displayOptions`
- One field per argument with the correct type (string / number / boolean / enum)

Tools whose arguments contain nested `array` or `object` types are skipped at codegen time with a `skipped` reason stored in the metadata. They still exist on the REST API — use the n8n HTTP Request node to call them.

Idempotency-Key logic reads `x-adspirer-read-only` from the OpenAPI spec per-tool, so non-read operations automatically send an idempotency header.

### Project structure

```
n8n-nodes-adspirer/
├── credentials/
│   └── AdspireApi.credentials.ts       # API key Bearer auth, credential-test
├── nodes/Adspirer/
│   ├── Adspirer.node.ts                # Main node — execute() loop, error mapping
│   ├── Adspirer.node.json              # Codex metadata (categories, AI hints)
│   ├── generated/
│   │   └── tools.ts                    # GENERATED from OpenAPI, do not hand-edit
│   ├── shared/
│   │   ├── build-properties.ts         # Turns TOOLS metadata → INodeProperties[]
│   │   ├── toolMapping.ts              # resolveTool, buildToolArguments, isWriteTool
│   │   └── descriptions.ts             # re-exports platformSelect
│   ├── adspirer.svg / .dark.svg        # Node icons
├── scripts/
│   └── generate-operations.js          # Codegen (fetch OpenAPI → emit tools.ts)
├── spec/
│   └── openapi.json                    # Cached spec for reproducible builds
├── icons/                              # Credential-level icons
└── .github/workflows/                  # CI + provenance-attested npm publish
```

## Support

- **Website:** [adspirer.ai](https://adspirer.ai)
- **REST API docs:** [adspirer.com/docs/api-reference](https://www.adspirer.com/docs/api-reference/introduction)
- **Issues:** [github.com/amekala/n8n-nodes-adspirer/issues](https://github.com/amekala/n8n-nodes-adspirer/issues)
- **Email:** abhi@adspirer.com

## License

[MIT](LICENSE.md)
