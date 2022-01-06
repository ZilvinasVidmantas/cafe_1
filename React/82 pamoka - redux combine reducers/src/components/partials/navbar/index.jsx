import React from 'react';
import { AppBar, Container, Box } from '@mui/material';
import Link from './navbar-link';

const Navbar = () => (
  <AppBar position="sticky" sx={{ height: 56 }}>
    <Container sx={{
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <Box sx={{ display: 'flex' }}>
        <Link to="/">Home</Link>
        <Link to="/users-panel">Users panel</Link>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Box>
    </Container>
  </AppBar>
);

export default Navbar;
