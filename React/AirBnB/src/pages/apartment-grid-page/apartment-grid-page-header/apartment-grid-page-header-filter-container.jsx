import { Box } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
// import ApartmentTypography from './ApartmentTypography';
import Typography from '@mui/material/Typography';
import OutlinedCapsuleButton from '../../../components/buttons/outlined-capsule-button';

const ApartmentGridPageHeaderFilterContainer = () => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    <OutlinedCapsuleButton className="active">
      <Typography>Bet kada</Typography>
      <KeyboardArrowDownIcon />
    </OutlinedCapsuleButton>
    <OutlinedCapsuleButton>
      <Typography>Svečiai</Typography>
      <KeyboardArrowDownIcon />
    </OutlinedCapsuleButton>
    <OutlinedCapsuleButton>
      <SettingsIcon sx={{ mr: 1 }} />
      <Typography>Filtrai</Typography>
    </OutlinedCapsuleButton>
  </Box>
);

export default ApartmentGridPageHeaderFilterContainer;
