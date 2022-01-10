import React from 'react';
import { AppBar, Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth/selectors';
import Link from './navbar-link';

const Navbar = () => {
  const auth = useSelector(authSelector);
  console.log(auth);
  /*
    1. Kuomet vartotojas prisijungęs, paslėpti Login ir Register nuorodas
    2. Vietoj Login ir Resgiter nuorodų įdėti mygtuką Su užrašu "Logout"
  */
 
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
        <Box sx={{ display: 'flex' }}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
