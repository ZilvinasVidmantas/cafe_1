import React from 'react';
import { Box } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import ApartmentTypeButton from './ApartmentTypeButton';
import ApartmentTypography from './ApartmentTypography';
import Typography from '@mui/material/Typography';



const ApartmentGridHeaderTypeContainer = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ pb: 1, borderBottom: 1 }}>
        <ApartmentTypeButton>
          <HouseIcon sx={{ mr: 0.5 }} />
          <Typography color="text.primary" sx={{ fontWeight: 600 }}>Nuosavi namai</Typography>
        </ApartmentTypeButton>
      </Box>
      <Box sx={{ pb: 1 }}>
        <ApartmentTypeButton>
          <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Butai</Typography>
        </ApartmentTypeButton>

      </Box>
      <Box sx={{ pb: 1 }}>
        <ApartmentTypeButton>
          <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Kotedžai</Typography>
        </ApartmentTypeButton>
      </Box>
    </Box>
  )
}

export default ApartmentGridHeaderTypeContainer
