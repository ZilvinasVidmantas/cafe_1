import * as React from 'react';
import { Box } from '@mui/material';
import ApartmentGridPageHeaderTypeContainer from './apartment-grid-page-header-type-container';
import ApartmentGridPageHeaderFilterContainer from './apartment-grid-page-header-filter-container';

const ApartmentGridHeader = () => (
  <Box sx={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3.5, mb: 0,
  }}
  >
    <ApartmentGridPageHeaderTypeContainer />
    <ApartmentGridPageHeaderFilterContainer />
  </Box>
);

export default ApartmentGridHeader;
