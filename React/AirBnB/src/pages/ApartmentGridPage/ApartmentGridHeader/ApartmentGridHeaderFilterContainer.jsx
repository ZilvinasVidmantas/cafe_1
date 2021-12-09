import { Box } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import ApartmentTypography from './ApartmentTypography';
import ApartmentFilterButton from './ApartmentFilterButton';
import Typography from '@mui/material/Typography';

const ApartmentGridHeaderFilterContainer = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <ApartmentFilterButton className="active">
        <Typography>Bet kada</Typography>
        <KeyboardArrowDownIcon />
      </ApartmentFilterButton>
      <ApartmentFilterButton>
        <Typography>Svečiai</Typography>
        <KeyboardArrowDownIcon />
      </ApartmentFilterButton>
      <ApartmentFilterButton>
        <SettingsIcon sx={{ mr: 1 }} />
        <Typography>Filtrai</Typography>
      </ApartmentFilterButton>
    </Box>
  )
}

export default ApartmentGridHeaderFilterContainer
