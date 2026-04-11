import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AdspireApi implements ICredentialType {
	name = 'adspireApi';

	displayName = 'Adspirer API';

	icon: Icon = { light: 'file:../icons/adspirer.svg', dark: 'file:../icons/adspirer.dark.svg' };

	documentationUrl = 'https://www.adspirer.com/docs/quickstart';

	description =
		'Sign up at adspirer.ai, then get your API key from your account settings.';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Your Adspirer API key. Get one at adspirer.com/settings.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://mcp.adspirer.com',
			url: '/api/v1/actions/health',
			method: 'GET',
		},
	};
}
