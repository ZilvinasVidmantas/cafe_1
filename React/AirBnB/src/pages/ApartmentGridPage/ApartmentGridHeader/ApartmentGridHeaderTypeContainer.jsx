import React from 'react';
import { Box } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import ApartmentTypeButton from './ApartmentTypeButton';
import ApartmentTypography from './ApartmentTypography';


const ApartmentGridHeaderTypeContainer = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ pb: 1, borderBottom: 1 }}>
        <ApartmentTypeButton>
          <HouseIcon sx={{ mr: 0.5 }} />
          <ApartmentTypography color="text.primary" sx={{ fontWeight: 600 }}>Nuosavi namai</ApartmentTypography>
        </ApartmentTypeButton>
      </Box>
      <Box sx={{ pb: 1 }}>
        <ApartmentTypeButton>
          <ApartmentTypography color="text.secondary" sx={{ fontWeight: 600 }}>Butai</ApartmentTypography>
        </ApartmentTypeButton>

      </Box>
      <Box sx={{ pb: 1 }}>
        <ApartmentTypeButton>
          <ApartmentTypography color="text.secondary" sx={{ fontWeight: 600 }}>Kotedžai</ApartmentTypography>
        </ApartmentTypeButton>
      </Box>
    </Box>
  )
}

export default ApartmentGridHeaderTypeContainer
