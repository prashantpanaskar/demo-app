//Third party library imports
import React, { useEffect, useState } from 'react';
import {
	AuthenticatedTemplate,
	UnauthenticatedTemplate,
	useMsal,
} from '@azure/msal-react';
//Local imports
import { Layout } from './components/layout/Layout';
import { loginRequest } from './authConfig';
import { ProfileData } from './components/profileData/ProfileData';
import { callMsGraph, getUsers } from './graph';

function ProfileContent() {
	const { instance, accounts } = useMsal();
	const [usersData, setUsersData] = useState(null);

	useEffect(() => {
		const request = {
			...loginRequest,
			account: accounts[0],
		};

		// Silently acquires an access token which is then attached to a request for Microsoft Graph data
		instance
			.acquireTokenSilent(request)
			.then((response) => {
				callMsGraph(response.accessToken).then((response) =>
					sessionStorage.setItem('loggedInUserData', response)
				);
				getUsers(response.accessToken).then((response) =>
					setUsersData(response)
				);
			})
			.catch((e) => {
				instance.acquireTokenPopup(request).then((response) => {
					callMsGraph(response.accessToken).then((response) =>
						sessionStorage.setItem('loggedInUserData', response)
					);
					getUsers(response.accessToken).then((response) =>
						setUsersData(response)
					);
				});
			});
	}, []);

	return (
		<>
			{usersData ? (
				<ProfileData usersData={usersData} />
			) : (
				<p> No data available... </p>
			)}
		</>
	);
}

function App() {
	return (
		<Layout>
			<AuthenticatedTemplate>
				<ProfileContent />
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<p>You are not signed in! Please sign in.</p>
			</UnauthenticatedTemplate>
		</Layout>
	);
}

export default App;
