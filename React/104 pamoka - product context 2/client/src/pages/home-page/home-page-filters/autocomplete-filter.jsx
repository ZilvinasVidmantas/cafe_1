import React, { useMemo } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import FilterContainer from './filter-container';

const AutocompleteFilter = ({ name, options }) => {
  const values = useMemo(() => options.map((x) => ({ ...x, label: x.title })), [options]);

  return (
    <FilterContainer name={name}>
      <Autocomplete
        sx={{ my: 1 }}
        options={values}
        size="small"
        renderInput={(params) => (
          <TextField {...params} />
        )}
      />
    </FilterContainer>
  );
};

export default AutocompleteFilter;
