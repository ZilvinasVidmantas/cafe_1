import { styled } from '@mui/material/styles';
import CapsuleButton from './capsule-button';

const OutlinedCapsuleButton = styled(CapsuleButton)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  border: `1px solid ${theme.palette.grey[400]}`,
  ':hover': {
    borderColor: theme.palette.common.black,
  },
  '&.active': {
    background: theme.palette.action.hover,
    border: `2px solid ${theme.palette.common.black}`,
  },
}));

export default OutlinedCapsuleButton;
