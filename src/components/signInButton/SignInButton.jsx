//Third party imports
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';
//Local imports
import { loginRequest } from '../../authConfig';

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
	const { instance } = useMsal();

	const handleLogin = (loginType) => {
		if (loginType === 'popup') {
			instance.loginPopup(loginRequest).catch((e) => {
				console.log(e);
			});
		} else if (loginType === 'redirect') {
			instance.loginRedirect(loginRequest).catch((e) => {
				console.log(e);
			});
		}
	};

	return (
		<Button
			variant='contained'
			color='secondary'
			onClick={() => handleLogin('popup')}
		>
			Sign in to see Profile Data
		</Button>
	);
};
