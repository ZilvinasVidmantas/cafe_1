import React from 'react';
import {
  Paper,
  Typography,
  Divider,
} from '@mui/material';
import OptionFilter from './option-filter';
import RangeFilter from './range-filter';
import AutocompleteFilter from './autocomplete-filter';

const FilterMap = {
  autocomplete: AutocompleteFilter,
  range: RangeFilter,
  options: OptionFilter,
};

const filterData = [
  {
    id: '1',
    name: 'brand',
    type: 'autocomplete',
    options: [
      { id: '1', name: 'LOC' },
      { id: '2', name: 'Samsung' },
      { id: '3', name: 'LG' },
    ],
  },
  {
    id: '3',
    name: 'price',
    type: 'range',
    min: 80,
    max: 900,
  },
  {
    id: '4',
    name: 'type',
    type: 'options',
    options: [
      { id: '1', name: 'widescreen' },
      { id: '2', name: 'super-widescreen' },
      { id: '3', name: 'curved' },
    ],
  },
  {
    id: '2',
    name: 'size',
    type: 'options',
    options: [
      { id: '1', name: '21' },
      { id: '2', name: '22' },
      { id: '3', name: '23' },
      { id: '4', name: '24' },
      { id: '5', name: '25' },
      { id: '6', name: '26' },
    ],
  },
];

const HomePageFilters = () => (
  <Paper sx={{ flexBasis: 240, flexShrink: 0, p: 2 }} elevation={3}>
    <Typography variant="h5">Filters</Typography>
    {
      filterData.map(({ type, id, ...props }) => {
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

export default HomePageFilters;
