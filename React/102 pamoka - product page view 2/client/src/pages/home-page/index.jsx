import React from 'react';
import {
  Box,
} from '@mui/material';
import Header from './home-page-header';
import Filters from './home-page-filters';
import Prodcuts from './home-page-products';

const HomePage = () => (
  <Box>
    <Header />
    <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
      <Filters />
      <Prodcuts />
    </Box>
  </Box>
);

export default HomePage;
