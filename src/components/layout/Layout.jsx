//Third party library imports
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
//Local imports
import { SignInButton } from '../signInButton/SignInButton';
import { SignOutButton } from '../signOutButton/SignOutButton';
import { StyledBox, StyledTypography, StyledCapitalizedBox } from './style';

/**
 * Renders the Appbar component with a sign-in button if a user is not authenticated
 */

export const Layout = (props) => {
	const isAuthenticated = useIsAuthenticated();
	const { accounts } = useMsal();

	const name = accounts[0] && accounts[0].name;

	return (
		<>
			<StyledBox>
				<AppBar position='static'>
					<Toolbar>
						<StyledTypography variant='h6' component='div'>
							Users Information System
						</StyledTypography>
						{isAuthenticated ? (
							<>
								<Typography component='div'>
									<StyledCapitalizedBox>
										Welcome, {name}
									</StyledCapitalizedBox>
								</Typography>
								<SignOutButton />
							</>
						) : (
							<SignInButton />
						)}
					</Toolbar>
				</AppBar>
			</StyledBox>
			{props.children}
		</>
	);
};
