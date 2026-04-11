# n8n-nodes-adspirer

n8n community node for [Adspirer](https://www.adspirer.com) — AI-powered ad management across Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads.

Skip the dashboard. Automate your ad operations with n8n workflows.

## Features

- **Campaign Performance Analysis** — Get metrics across Google Ads and Meta Ads
- **Wasted Spend Detection** — Identify and eliminate wasted ad spend
- **Budget Optimization** — Get actionable budget recommendations
- **Keyword Research** — Research keywords with real CPC and search volume data
- **Search Terms Analysis** — Find negative keyword opportunities
- **Campaign Creation** — Create Google Search and Performance Max campaigns
- **Ad Creative Analysis** — Analyze Meta ad performance with creative fatigue detection
- **Audience Insights** — Get audience demographics and placement analysis
- **AI Agent Compatible** — Use as an AI agent tool with `usableAsTool: true`

## Supported Platforms

| Platform | Operations |
|----------|-----------|
| Google Ads | Performance, Wasted Spend, Budget Optimization, Keyword Research, Search Terms, Create Search Campaign, Create PMax Campaign |
| Meta Ads | Campaign Performance, Ad Performance, Audience Insights |

## Authentication

Two authentication methods are supported:

### OAuth2 (Recommended)

1. Add the Adspirer node to your workflow
2. Select **OAuth2** authentication
3. Click **Connect** — a browser window opens for authorization
4. Sign in to your Adspirer account and authorize access

### API Key

1. Get your API key from [adspirer.com/settings](https://www.adspirer.com/settings)
2. Add the Adspirer node to your workflow
3. Select **API Key** authentication
4. Enter your API key

## Example Workflows

### Daily Performance Report to Slack

```
Schedule Trigger (daily 9am)
  → Adspirer: Campaign Performance (Google Ads, 1 day)
  → Adspirer: Campaign Performance (Meta Ads, 1 day)
  → Code Node: format combined report
  → Slack: post to #marketing
```

### Weekly Budget Optimization

```
Schedule Trigger (every Monday)
  → Adspirer: Wasted Spend Analysis (Google Ads, 7 days)
  → Adspirer: Budget Optimization (Google Ads, 7 days)
  → Google Sheets: log recommendations
  → Slack: alert team
```

### AI Ad Manager in Slack

```
Chat Trigger (Slack)
  → AI Agent (Claude / GPT-4)
    → Adspirer node (all operations available as tools)
  → Slack: post response
```

## Installation

### In n8n (Community Nodes)

1. Go to **Settings > Community Nodes**
2. Select **Install a community node**
3. Enter `n8n-nodes-adspirer`
4. Click **Install**

### Manual Installation

```bash
npm install n8n-nodes-adspirer
```

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start n8n with this node loaded (hot reload)
npm run lint       # Check code quality
npm run build      # Compile TypeScript
```

## Resources

- [Adspirer Website](https://www.adspirer.com)
- [Adspirer Quickstart Guide](https://www.adspirer.com/docs/quickstart)
- [n8n Community Nodes Docs](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE.md)
