import { Box } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
// import ApartmentTypography from './ApartmentTypography';
import Typography from '@mui/material/Typography';
import ApartmentGridPageHeaderFilterButton from './apartment-grid-page-header-filter-button';

const ApartmentGridPageHeaderFilterContainer = () => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    <ApartmentGridPageHeaderFilterButton className="active">
      <Typography>Bet kada</Typography>
      <KeyboardArrowDownIcon />
    </ApartmentGridPageHeaderFilterButton>
    <ApartmentGridPageHeaderFilterButton>
      <Typography>Svečiai</Typography>
      <KeyboardArrowDownIcon />
    </ApartmentGridPageHeaderFilterButton>
    <ApartmentGridPageHeaderFilterButton>
      <SettingsIcon sx={{ mr: 1 }} />
      <Typography>Filtrai</Typography>
    </ApartmentGridPageHeaderFilterButton>
  </Box>
);

export default ApartmentGridPageHeaderFilterContainer;
