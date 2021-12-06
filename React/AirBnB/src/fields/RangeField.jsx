import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider
} from '@mui/material';
import RangeFieldInput from './RangeFieldInput';

const RangeField = () => {
  const [[min, max], setPriceRange] = useState([100, 1500]);

  const handlePriceRangeChange = (_, newValue) => {
    setPriceRange(newValue);
  }

  return (
    <>
      <Typography id="input-slider" gutterBottom>Kainos rėžiai</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <RangeFieldInput
          value={min}
          onChange={(e) => setPriceRange([Number(e.target.value), max])}
        />
        <RangeFieldInput
          value={max}
          onChange={(e) => setPriceRange([min, Number(e.target.value)])}
        />
      </Box>
      <Box sx={{ mt: 1, mb: 2, px: 1.5 }}>
        <Slider
          step={50}
          min={100}
          max={5000}
          aria-labelledby="priceRange"
          getAriaLabel={() => 'Kaina'}
          value={[min, max]}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};

export default RangeField;
