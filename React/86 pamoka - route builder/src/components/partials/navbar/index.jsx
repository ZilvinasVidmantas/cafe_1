import React from 'react';
import {
  AppBar, Container, Box, Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../../store/auth/action-creators';
import { authSelector } from '../../../store/auth/selectors';
import Link from './navbar-link';
import routes from '../../../routing/routes';

const Navbar = ({ sidebarIcon }) => {
  const { loggedIn, user } = useSelector(authSelector);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutAction);

  return (
    <AppBar position="sticky" sx={{ height: 56 }}>
      <Container sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Box sx={{ display: 'flex' }}>
          { sidebarIcon ?? null}
          <Link to={routes.HomePage}>Home</Link>
          {
            user && user.role === 'admin'
              ? <Link to={routes.UsersPanelPage}>Users panel</Link>
              : null
          }

        </Box>
        {
          loggedIn
            ? <Button color="secondary" variant="contained" sx={{ my: 1 }} onClick={handleLogout}>Logout</Button>
            : (
              <Box sx={{ display: 'flex' }}>
                <Link to={routes.LoginPage}>Login</Link>
                <Link to={routes.RegisterPage}>Register</Link>
              </Box>
            )
        }
      </Container>
    </AppBar>
  );
};

export default Navbar;
