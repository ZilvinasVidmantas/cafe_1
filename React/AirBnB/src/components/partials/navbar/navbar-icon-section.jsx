import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AirbnbIcon from '../../aribnb-icon';

const NavbarIconSection = () => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <AirbnbIcon />
    </Link>
    <Link to="/search">Search aparments</Link>
    <Link to="/apartment-location">Apartments by location</Link>
    <Link to="/apartment-grid">Apartment grid</Link>
  </Box>
);

export default NavbarIconSection;
