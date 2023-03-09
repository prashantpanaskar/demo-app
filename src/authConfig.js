export const msalConfig = {
	auth: {
		clientId: 'a3439a17-ed38-4f49-b0dd-07730ea3d9d5',
		authority: 'https://login.microsoftonline.com/consumers', // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
		redirectUri: 'http://localhost:3000',
	},
	cache: {
		cacheLocation: 'sessionStorage', // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
	scopes: ['User.Read'],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
	graphMeEndpoint: 'https://jsonplaceholder.typicode.com/users',
	usersEndpoint: 'https://jsonplaceholder.typicode.com/users',
};
