import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider
} from '@mui/material';
import RangeFieldInput from './RangeFieldInput';

const RangeField = ({ value, ...sliderProps}) => {
  const [[selectedMin, selectedMax], setPriceRange] = useState(value);

  const handlePriceRangeChange = (_, newValue) => {
    setPriceRange(newValue);
  }

  return (
    <Box>
      <Typography gutterBottom>Kainos rėžiai</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <RangeFieldInput
          value={selectedMin}
          onChange={(e) => setPriceRange([Number(e.target.value), selectedMax])}
        />
        <RangeFieldInput
          value={selectedMax}
          onChange={(e) => setPriceRange([selectedMin, Number(e.target.value)])}
        />
      </Box>
      <Box sx={{ mt: 1, mb: 2, px: 1.5 }}>
        <Slider
          {...sliderProps}
          value={[selectedMin, selectedMax]}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
};

export default RangeField;


/*
  2. Įgalinti Range Field pavadinimo perdavimą per propsus
  * ir beabejo tas reikšmes per propsus perduoti ir pritaikyti

  3. Iškelti RangeField Update atsinaujinimo logiką į SearchPage

*/
