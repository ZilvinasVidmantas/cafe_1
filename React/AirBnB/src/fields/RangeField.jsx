import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider
} from '@mui/material';
import RangeFieldInput from './RangeFieldInput';

const RangeField = () => {
  const [priceRange, setPriceRange] = useState([100, 1500]);

  const handlePriceRangeChange = (_, newValue) => {
    setPriceRange(newValue);
  }

  return (
    <>
      <Typography id="input-slider" gutterBottom>Kainos rėžiai</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <RangeFieldInput />
        <RangeFieldInput />
      </Box>
      <Box sx={{ mt: 1, mb: 2, px: 1.5 }}>
        <Slider
          step={50}
          min={100}
          max={5000}
          aria-labelledby="priceRange"
          getAriaLabel={() => 'Kaina'}
          value={priceRange}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};

export default RangeField;

/*
  1. Atvaizduoti Slider'io reikšmes Input'uose
    * Perduoti reikšmę per props ir ją panaudoti
  2. Pakeitus Input'o reikšmę, nustayti naują <priceRange> būsenos kintamojo reikšmę
    * Perduoti onChange funkciją per props, ir ją panaudoti


*/
