import { Box } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import ApartmentTypography from './ApartmentTypography';
import ApartmentFilterButton from './ApartmentFilterButton';

const ApartmentGridHeaderFilterContainer = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <ApartmentFilterButton className="active">
        <ApartmentTypography>Bet kada</ApartmentTypography>
        <KeyboardArrowDownIcon />
      </ApartmentFilterButton>
      <ApartmentFilterButton>
        <ApartmentTypography>Svečiai</ApartmentTypography>
        <KeyboardArrowDownIcon />
      </ApartmentFilterButton>
      <ApartmentFilterButton>
        <SettingsIcon sx={{ mr: 1 }} />
        <ApartmentTypography>Filtrai</ApartmentTypography>
      </ApartmentFilterButton>
    </Box>
  )
}

export default ApartmentGridHeaderFilterContainer
