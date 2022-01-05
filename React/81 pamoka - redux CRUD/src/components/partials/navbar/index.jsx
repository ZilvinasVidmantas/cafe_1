import React from 'react';
import { AppBar, Container } from '@mui/material';
import Link from './navbar-link';

const Navbar = () => (
  <AppBar position="sticky" sx={{ height: 56 }}>
    <Container sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }}
    >
      <Link to="/">Home</Link>
      <Link to="/users-panel">Users panel</Link>
    </Container>
  </AppBar>
);

export default Navbar;
