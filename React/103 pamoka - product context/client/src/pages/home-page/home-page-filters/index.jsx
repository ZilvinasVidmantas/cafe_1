import React, { useContext } from 'react';
import {
  Paper,
  Typography,
  Divider,
} from '@mui/material';
import OptionFilter from './option-filter';
import RangeFilter from './range-filter';
import AutocompleteFilter from './autocomplete-filter';
import { ProductContext } from '../contexts/product-context';

const FilterMap = {
  autocomplete: AutocompleteFilter,
  range: RangeFilter,
  options: OptionFilter,
};

const HomePageFilters = () => {
  const { filters } = useContext(ProductContext);
  return (
    <Paper sx={{ flexBasis: 240, flexShrink: 0, p: 2 }} elevation={3}>
      <Typography variant="h5">Filters</Typography>
      {
      filters.map(({ type, id, ...props }) => {
        const Filter = FilterMap[type];
        return (
          <React.Fragment key={id}>
            <Divider sx={{ my: 2 }} />
            <Filter {...props} />
          </React.Fragment>
        );
      })
    }
    </Paper>
  );
};

export default HomePageFilters;
