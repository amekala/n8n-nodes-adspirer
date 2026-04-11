import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class AdspireOAuth2Api implements ICredentialType {
	name = 'adspireOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Adspirer OAuth2 API';

	icon: Icon = { light: 'file:../icons/adspirer.svg', dark: 'file:../icons/adspirer.dark.svg' };

	documentationUrl = 'https://www.adspirer.com/docs/quickstart';

	description =
		'Connect your Adspirer account via OAuth2. Sign up at adspirer.ai if you don\'t have an account.';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://mcp.adspirer.com/oauth/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://mcp.adspirer.com/oauth/token',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'ads:read ads:write',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
	];
}
