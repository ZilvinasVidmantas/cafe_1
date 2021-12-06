import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider
} from '@mui/material';
import RangeFieldInput from './RangeFieldInput';

const RangeField = ({ title, onChange, value, ...sliderProps }) => {
  const [selectedMin, selectedMax] = value;

  return (
    <Box>
      <Typography gutterBottom>{title}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <RangeFieldInput
          value={selectedMin}
          onChange={(e) => onChange([Number(e.target.value), selectedMax])}
        />
        <RangeFieldInput
          value={selectedMax}
          onChange={(e) => onChange([selectedMin, Number(e.target.value)])}
        />
      </Box>
      <Box sx={{ mt: 1, mb: 2, px: 1.5 }}>
        <Slider
          {...sliderProps}
          value={value}
          onChange={(_, newValue) => onChange(newValue) }
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
};

export default RangeField;


/*

  3.a Iškelti RangeField Update atsinaujinimo logiką į SearchPage
  
  3.b Yra bėda:
    Slideris keičia reikšmę labai dažnai, tam kad ji nebūtų keičiama pastoviai
    geriau būtų naudoti listenerį:
      onChangeCommitted

    Tokiu būdu, reikšmė pasikeis tik atleidus pėlytę, tačiau prarandame animaciją.

    Jūsų užduotis išspręsti, jog IR matytūsi animacija, bet per propsus
    gauta funkcija būtų kviečiama, tik atleidus pėlytę.
*/
