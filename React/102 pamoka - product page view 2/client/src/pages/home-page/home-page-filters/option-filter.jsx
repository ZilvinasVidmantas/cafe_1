import React from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import FilterContainer from './filter-container';

const OptionFilter = ({ options, name }) => (
  <FilterContainer name={name}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {
        options.map((x) => (
          <FormControlLabel
            key={x.id}
            control={<Checkbox defaultChecked size="small" />}
            label={x.name}
          />
        ))
      }
    </Box>
  </FilterContainer>
);

export default OptionFilter;
