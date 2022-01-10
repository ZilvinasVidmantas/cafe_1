import React from 'react';
import {
  AppBar, Container, Box, Button,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth/selectors';
import Link from './navbar-link';

const Navbar = () => {
  const auth = useSelector(authSelector);

  return (
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
        {
          auth.loggedIn
            ? <Button color="secondary" variant="contained" sx={{ my: 1 }}>Logout</Button>
            : (
              <Box sx={{ display: 'flex' }}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </Box>
            )
        }
      </Container>
    </AppBar>
  );
};

export default Navbar;
