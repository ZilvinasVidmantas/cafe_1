import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { Box, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { selectAuth } from '../../../store/auth';
import DrawerHeader from './dashboard-layout-drawer-header';
import Navbar from './dashboard-layout-navbar';
import Drawer from './dashboard-layout-drawer';
import routes from '../../../routing/routes';

const drawerWidth = 240;

const DashboardLayout = () => {
  const { user } = useSelector(selectAuth);
  const [open, setOpen] = useState(false);

  if (!user) return <Navigate to={routes.HomePage} />;

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        open={open}
        user={user}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>

      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          display: { xs: 'inline-flex', md: 'none' },
        }}
        onClick={handleDrawerToggle}
      >
        { open ? <CloseIcon /> : <MenuIcon />}
      </Fab>
    </Box>
  );
};

export default DashboardLayout;
