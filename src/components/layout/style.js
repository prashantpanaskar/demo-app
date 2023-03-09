import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const StyledBox = styled(Box)(({ theme }) => ({
	flexGrow: 1,
}));

export const StyledCapitalizedBox = styled(Box)(({ theme }) => ({
	textTransform: 'capitalize',
	margin: '10px',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
	flexGrow: 1,
}));
