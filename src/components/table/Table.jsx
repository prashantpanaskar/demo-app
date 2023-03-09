//Third party imports
import React from 'react';
import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//Local imports
import { StyledTableRow, StyledTableCell } from './style';

export default function Table({ data }) {
	return (
		<TableContainer component={Paper}>
			<MuiTable sx={{ minWidth: 700 }} aria-label='users data table'>
				<TableHead>
					<TableRow>
						<StyledTableCell>Name</StyledTableCell>
						<StyledTableCell>UserName</StyledTableCell>
						<StyledTableCell>Email</StyledTableCell>
						<StyledTableCell>Phone</StyledTableCell>
						<StyledTableCell>Website</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<StyledTableRow key={item.id}>
							<StyledTableCell component='th' scope='row'>
								{item.name}
							</StyledTableCell>
							<StyledTableCell>{item.username}</StyledTableCell>
							<StyledTableCell>{item.email}</StyledTableCell>
							<StyledTableCell>{item.phone}</StyledTableCell>
							<StyledTableCell>{item.website}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</MuiTable>
		</TableContainer>
	);
}
