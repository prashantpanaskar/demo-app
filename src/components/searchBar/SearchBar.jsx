//Third party imports
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';

export default function SearchBar(props) {
	const [searchText, setSearchText] = useState('');
	const { onSearch, onCancelSearch } = props;

	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

	const handleCancelSearch = (e) => {
		setSearchText('');
	};

	useEffect(() => {
		searchText && searchText.length !== 0
			? onSearch(searchText)
			: onCancelSearch();
	}, [searchText]);

	return (
		<Stack>
			<TextField
				autoFocus
				value={searchText}
				onChange={handleChange}
				fullWidth
				placeholder='Search'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							{searchText && searchText.length !== 0 ? (
								<IconButton
									type='button'
									sx={{ p: '10px' }}
									aria-label='search'
									onClick={handleCancelSearch}
								>
									<CloseIcon />
								</IconButton>
							) : (
								<IconButton
									type='button'
									sx={{ p: '10px' }}
									aria-label='search'
									onClick={() => onSearch(searchText)}
								>
									<SearchIcon />
								</IconButton>
							)}
						</InputAdornment>
					),
				}}
				variant='outlined'
			/>
			{props.children}
		</Stack>
	);
}
