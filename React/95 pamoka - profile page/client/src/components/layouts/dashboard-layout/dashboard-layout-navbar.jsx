import React from 'react';
import {
  styled,
  AppBar,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import AuthMenu from '../../auth-menu';
import NavbarLink from '../../navbar-link';
import routes from '../../../routing/routes';

const StyledDashboardLayoutNavbar = styled(AppBar, {
  shouldForwardProp: (prop) => !['open', 'drawerWidth'].includes(prop),
})(({ theme, open, drawerWidth }) => ({
  height: theme.mixins.toolbar.minHeight,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DashboardLayoutNavbar = ({ open, drawerWidth, handleDrawerOpen }) => (
  <StyledDashboardLayoutNavbar position="fixed" open={open} drawerWidth={drawerWidth}>
    <Box
      maxWidth="xxl"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: 1 / 1,
        pl: { md: 3 },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            display: {
              xs: 'none',
              md: open ? 'none' : 'inline-flex',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <NavbarLink to={routes.HomePage}>Home</NavbarLink>
      </Box>
      <AuthMenu />
    </Box>
  </StyledDashboardLayoutNavbar>
);

export default DashboardLayoutNavbar;
