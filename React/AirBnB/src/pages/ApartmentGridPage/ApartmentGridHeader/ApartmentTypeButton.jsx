import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ApartmentTypeButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'none',
  textTransform: 'none',
  color: theme.palette.text.secondary,
  ':hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default ApartmentTypeButton;