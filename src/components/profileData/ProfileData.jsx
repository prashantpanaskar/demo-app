//Third party library imports
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
//Local imports
import SearchBar from '../searchBar/SearchBar';
import Table from '../table/Table';
import { StyledBox } from './style';

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = ({ usersData }) => {
	const [usersOriginalData, setUsersData] = useState(usersData);
	const [filteredUsersData, setFilteredUsersData] = useState(usersData);

	const handleSearch = (searchText) => {
		console.log(searchText);
		console.log();
		const filteredData = usersOriginalData.filter((data) => {
			return data.name.toLowerCase().includes(searchText.toLowerCase());
		});
		setFilteredUsersData(filteredData);
	};

	const handleCancelSearch = () => {
		setFilteredUsersData(usersOriginalData);
	};

	return (
		<StyledBox>
			<Typography variant='h5' align='center'>
				Users Data table
			</Typography>
			<SearchBar
				onSearch={handleSearch}
				onCancelSearch={handleCancelSearch}
			>
				<Table data={filteredUsersData} />
			</SearchBar>
		</StyledBox>
	);
};
