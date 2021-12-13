import * as React from 'react';
import { Box } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import Typography from '@mui/material/Typography';
import ApartmentGridPageHeaderButton from './apartment-grid-page-header-button';
// import ApartmentTypography from './ApartmentTypography';

const ApartmentGridPageHeaderTypeContainer = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ pb: 1, borderBottom: 1 }}>
      <ApartmentGridPageHeaderButton>
        <HouseIcon sx={{ mr: 0.5 }} />
        <Typography color="text.primary" sx={{ fontWeight: 600 }}>Nuosavi namai</Typography>
      </ApartmentGridPageHeaderButton>
    </Box>
    <Box sx={{ pb: 1 }}>
      <ApartmentGridPageHeaderButton>
        <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Butai</Typography>
      </ApartmentGridPageHeaderButton>

    </Box>
    <Box sx={{ pb: 1 }}>
      <ApartmentGridPageHeaderButton>
        <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Kotedžai</Typography>
      </ApartmentGridPageHeaderButton>
    </Box>
  </Box>
);

export default ApartmentGridPageHeaderTypeContainer;
