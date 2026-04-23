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

	documentationUrl = 'https://www.adspirer.com/docs/api-reference/introduction';

	description =
		'Generate an API key at https://adspirer.ai/keys. Keys are prefixed sk_live_ — treat them as secrets.';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			placeholder: 'sk_live_...',
			required: true,
			description: 'Your Adspirer API key from https://adspirer.ai/keys',
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
			baseURL: 'https://api.adspirer.ai',
			url: '/api/v1/tools/list_connected_accounts/execute',
			method: 'POST',
			body: { arguments: {} },
		},
	};
}
