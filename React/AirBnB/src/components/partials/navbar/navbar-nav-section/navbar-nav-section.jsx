import React from 'react';
import { Box } from '@mui/material';
import AirbnbIcon from '../../../aribnb-icon';
import NavbarNavSectionLink from './navbar-nav-section-link';

const NavbarNavSection = () => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
    <NavbarNavSectionLink to="/">
      <AirbnbIcon />
    </NavbarNavSectionLink>
    <NavbarNavSectionLink to="/apartment-location">Apartments by location</NavbarNavSectionLink>
    <NavbarNavSectionLink to="/apartment-grid">Apartment grid</NavbarNavSectionLink>
  </Box>
);

export default NavbarNavSection;
