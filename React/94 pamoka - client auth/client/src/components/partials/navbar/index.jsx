import React from 'react';
import { AppBar, Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/auth';
import Link from './navbar-link';
import routes from '../../../routing/routes';
import NavbarMenu from './navbar-menu';

const Navbar = ({ sidebarIcon }) => {
  const { loggedIn, user } = useSelector(selectAuth);

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
            user && user.role === 'ADMIN'
              ? <Link to={routes.UsersPanelPage}>Users panel</Link>
              : null
          }

        </Box>
        {
          loggedIn
            ? <NavbarMenu />
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
