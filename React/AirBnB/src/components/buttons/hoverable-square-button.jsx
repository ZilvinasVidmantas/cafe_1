import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const HoverableSquareButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  backgroundColor: 'none',
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSizeLg,
  color: theme.palette.text[active ? 'primary' : 'secondary'],
  ':hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default HoverableSquareButton;
