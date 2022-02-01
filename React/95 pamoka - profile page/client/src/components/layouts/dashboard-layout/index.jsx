import * as React from 'react';
import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/auth';
import DrawerHeader from './dashboard-layout-drawer-header';
import Navbar from './dashboard-layout-navbar';
import Drawer from './dashboard-layout-drawer';
import routes from '../../../routing/routes';

const drawerWidth = 240;

const DashboardLayout = () => {
  const { user } = useSelector(selectAuth);
  const [open, setOpen] = React.useState(false);

  if (!user) return <Navigate to={routes.HomePage} />;

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

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
    </Box>
  );
};

export default DashboardLayout;
