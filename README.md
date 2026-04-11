# n8n-nodes-adspirer

[![npm](https://img.shields.io/npm/v/n8n-nodes-adspirer)](https://www.npmjs.com/package/n8n-nodes-adspirer)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

[n8n](https://n8n.io/) community node for [Adspirer](https://adspirer.ai) — automate ad campaign management across Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads.

Skip the dashboard. Build n8n workflows that monitor performance, optimize budgets, create campaigns, and alert your team — all on autopilot.

<p align="center">
  <img src="icons/adspirer.svg" alt="Adspirer" width="80" />
</p>

## What is Adspirer?

Adspirer is an MCP (Model Context Protocol) server with **100+ advertising tools** across 4 ad platforms. It lets AI assistants manage ad campaigns through natural language — no dashboards needed.

This n8n community node brings those same tools into n8n's workflow automation platform, so you can build automated ad workflows that run on schedules, respond to events, or power AI agents.

**MCP Server:** [`https://mcp.adspirer.com/mcp`](https://mcp.adspirer.com/mcp)
**MCP Registry:** [`com.adspirer/ads`](https://registry.modelcontextprotocol.io)
**Plugin Repo:** [`amekala/ads-mcp`](https://github.com/amekala/ads-mcp)

## Operations

### Google Ads (7 operations)

| Operation | Description |
|-----------|-------------|
| **Budget Optimization** | Get budget allocation and optimization recommendations |
| **Campaign Performance** | Get performance metrics for all campaigns over a date range |
| **Create PMax Campaign** | Create a new Performance Max campaign with assets |
| **Create Search Campaign** | Create a new Google Search campaign with keywords and ads |
| **Keyword Research** | Research keywords with real CPC, search volume, and competition data |
| **Search Terms Analysis** | Analyze search term performance and find negative keyword opportunities |
| **Wasted Spend Analysis** | Identify wasted ad spend and get optimization recommendations |

### Meta Ads (3 operations)

| Operation | Description |
|-----------|-------------|
| **Ad Performance** | Analyze individual ad and creative performance with fatigue detection |
| **Audience Insights** | Get audience demographics, placement analysis, and targeting insights |
| **Campaign Performance** | Get performance metrics for Meta ad campaigns |

### AI Agent Compatible

All operations are available as AI agent tools (`usableAsTool: true`). Add the Adspirer node as a tool to any n8n AI Agent and it can call any operation based on natural language instructions.

## Authentication

### OAuth2 (Recommended)

1. Add the Adspirer node to your workflow
2. Select **OAuth2 (Recommended)** authentication
3. Click **Connect** — a browser window opens for OAuth authorization
4. Sign in with your [Adspirer account](https://adspirer.ai) and authorize access
5. Your credentials are saved — all future workflows use the same connection

No API keys to manage. OAuth tokens refresh automatically.

### API Key

1. Sign up at [adspirer.ai](https://adspirer.ai) (free tier: 15 tool calls/month)
2. Get your API key from your account settings
3. Add the Adspirer node to your workflow
4. Select **API Key** authentication
5. Paste your API key

## Installation

### n8n Community Nodes (Recommended)

1. Open your n8n instance
2. Go to **Settings > Community Nodes**
3. Click **Install a community node**
4. Enter `n8n-nodes-adspirer`
5. Click **Install**

The Adspirer node appears in the nodes panel, searchable by "Adspirer", "ads", "Google Ads", "Meta Ads", "campaign", "keyword research", or "ppc".

### Self-Hosted / Docker

```bash
cd ~/.n8n
npm install n8n-nodes-adspirer
# Restart n8n
```

### n8n Cloud

Community nodes are available on n8n Cloud once verified. After verification, the node appears automatically in the nodes panel for all Cloud users.

## Example Workflows

### 1. Daily Google Ads Performance Report to Slack

Monitor campaign performance and get a summary in Slack every morning.

```
Schedule Trigger (daily 9am)
  → Adspirer: Campaign Performance (Google Ads, lookback: 1 day)
  → Adspirer: Campaign Performance (Meta Ads, lookback: 1 day)
  → Code Node: merge and format cross-platform report
  → Slack: post to #marketing channel
```

### 2. Weekly Wasted Spend Alert

Catch budget waste early with weekly automated analysis.

```
Schedule Trigger (every Monday 8am)
  → Adspirer: Wasted Spend Analysis (Google Ads, lookback: 7 days)
  → Adspirer: Budget Optimization (Google Ads, lookback: 7 days)
  → IF Node: wasted spend > $50?
    → Yes: Slack alert + Google Sheets log
    → No: skip
```

### 3. New Shopify Product → Google PMax Campaign

Automatically create ad campaigns when new products are added.

```
Shopify Trigger (new product created)
  → Adspirer: Create PMax Campaign (product name, URL, $30/day budget)
  → Slack: notify marketing team with campaign details
  → Google Sheets: log in campaign tracker
```

### 4. CRM Deal → Retargeting Campaign

Launch retargeting when a deal moves to a new stage.

```
HubSpot Trigger (deal stage changed to "Proposal Sent")
  → Adspirer: Keyword Research (brand + competitor terms)
  → Adspirer: Create Search Campaign (branded search, $20/day)
  → Gmail: notify account manager
```

### 5. AI Ad Manager in Slack

Let your team manage ads through natural language in Slack.

```
Chat Trigger (Slack)
  → AI Agent (Claude / GPT-4)
    → Adspirer node (all 10 operations available as tools)
    → Google Sheets tool (for logging)
  → Slack: post response
```

**Example conversation:**
- "How are my Google Ads doing this week compared to last week?"
- "Research keywords for emergency plumbing services in Chicago"
- "Create a search campaign for luxury watches targeting New York with $50/day budget"

### 6. Cross-Platform Weekly Report to Google Sheets

Build a living dashboard with weekly performance data.

```
Schedule Trigger (every Friday 5pm)
  → Adspirer: Campaign Performance (Google Ads, 7 days)
  → Adspirer: Campaign Performance (Meta Ads, 7 days)
  → Code Node: normalize metrics across platforms
  → Google Sheets: append to "Weekly Performance" sheet
  → Gmail: send formatted report to client
```

## Nodes That Pair Well With Adspirer

| Category | Nodes | Use Case |
|----------|-------|----------|
| **Triggers** | Schedule, Webhook, Cron | Start monitoring/reporting workflows |
| **CRM** | HubSpot, Salesforce, Pipedrive | Deal events → campaign creation |
| **E-commerce** | Shopify, WooCommerce, Stripe | Product/order events → ad campaigns |
| **Messaging** | Slack, Gmail, Teams, Discord, Twilio | Alerts, reports, notifications |
| **Spreadsheets** | Google Sheets, Airtable, Notion | Dashboards, logging, tracking |
| **AI** | AI Agent, OpenAI, Anthropic | Natural language ad management |
| **Logic** | IF, Switch, Code, Merge | Threshold checks, data formatting |
| **Forms** | Typeform, Google Forms | Client briefs → campaign setup |

## Pricing

Adspirer uses a freemium model. Tool calls in n8n count against your Adspirer plan limits:

| Plan | Tool Calls/Month | Price |
|------|-----------------|-------|
| Free | 15 | $0 |
| Plus | 150 | $49/mo |
| Pro | 600 | $99/mo |
| Max | 3,000 | $199/mo |

Sign up at [adspirer.ai](https://adspirer.ai). No credit card required for the free tier.

## Alternative: n8n Built-in MCP Nodes

If you prefer to use n8n's built-in MCP support (available since n8n v1.88.0) instead of this community node, you can connect directly to Adspirer's MCP server:

1. Add the **MCP Client Tool** node as a sub-node to an AI Agent
2. Set Transport: **Streamable HTTP**
3. Set URL: `https://mcp.adspirer.com/mcp`
4. Authenticate via OAuth 2.1 or Bearer token

This gives you access to all 100+ Adspirer tools via the AI agent. The community node (this package) provides a more structured experience with typed operations and field validation for deterministic workflows.

## Related Projects

| Project | Description | Link |
|---------|-------------|------|
| **ads-mcp** | Adspirer MCP server registration + multi-IDE plugins (Claude Code, Cursor, Codex, OpenClaw) | [github.com/amekala/ads-mcp](https://github.com/amekala/ads-mcp) |
| **Adspirer Docs** | Setup guides, platform docs, API reference | [adspirer.com/docs](https://www.adspirer.com/docs) |
| **MCP Server** | Production MCP endpoint (Streamable HTTP) | `https://mcp.adspirer.com/mcp` |
| **MCP Registry** | Model Context Protocol registry listing | [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io) |

## Development

### Prerequisites

- Node.js 22 LTS (required — Node 25 has compatibility issues with `isolated-vm`)
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
npm run dev           # Start n8n locally on :5678 with this node loaded (hot reload)
npm run build         # Compile TypeScript → dist/
npm run lint          # Check code quality (must pass for verification)
npm run lint:fix      # Auto-fix lint issues
npm run release       # Bump version, tag, push → GH Action publishes to npm
```

### Testing Locally

```bash
npm run dev
```

This starts a local n8n instance at `http://localhost:5678` with the Adspirer node pre-loaded. Create a workflow, add the Adspirer node, configure credentials, and test operations against your Adspirer account.

### Project Structure

```
n8n-nodes-adspirer/
├── credentials/
│   ├── AdspireApi.credentials.ts         # API key auth
│   └── AdspireOAuth2Api.credentials.ts   # OAuth 2.1 auth
├── nodes/
│   └── Adspirer/
│       ├── Adspirer.node.ts              # Main node definition
│       ├── Adspirer.node.json            # Codex metadata (categories, AI descriptions)
│       ├── adspirer.svg                  # Icon (light mode)
│       ├── adspirer.dark.svg             # Icon (dark mode)
│       ├── resources/
│       │   ├── googleAds.ts              # Google Ads operations + field definitions
│       │   └── metaAds.ts                # Meta Ads operations + field definitions
│       └── shared/
│           └── descriptions.ts           # Shared field definitions
├── icons/                                # Credential-level icons
├── .github/workflows/
│   ├── ci.yml                            # Lint + build on PR
│   └── publish.yml                       # npm publish with provenance attestation
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

### Publishing

Releases are published to npm via GitHub Actions with provenance attestation (required for n8n Creator Portal verification). The workflow triggers on semver tags:

```bash
npm run release       # Interactive: bumps version, updates changelog, tags, pushes
```

The GitHub Action then builds, lints, and publishes to npm with OIDC provenance signing.

## Support

- **Email:** abhi@adspirer.com
- **Issues:** [github.com/amekala/n8n-nodes-adspirer/issues](https://github.com/amekala/n8n-nodes-adspirer/issues)
- **Adspirer Issues:** [github.com/amekala/ads-mcp/issues](https://github.com/amekala/ads-mcp/issues)
- **Website:** [adspirer.ai](https://adspirer.ai)
- **Docs:** [adspirer.com/docs](https://www.adspirer.com/docs)
- **Server Status:** [mcp.adspirer.com/health](https://mcp.adspirer.com/health)

## License

[MIT](LICENSE.md)
