import * as React from 'react';
import {
  styled,
  useTheme,
  Box,
  Drawer as MuiDrawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/auth';
import DrawerHeader from './dashboard-layout-drawer-header';
import openedMixin from './mixins/opened-mixin';
import closedMixin from './mixins/closed-mixin';
import Navbar from './dashboard-layout-navbar';

import routes from '../../../routing/routes';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme, drawerWidth),
      '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DashboardLayout = () => {
  const { user } = useSelector(selectAuth);
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  if (!user) return <Navigate to={routes.HomePage} />;

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={open} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate(routes.ProfilePage)}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          {
            user && user.role === 'ADMIN'
              ? (
                <>
                  <Divider />
                  <ListItem button onClick={() => navigate(routes.UsersPanelPage)}>
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users panel" />
                  </ListItem>
                </>
              ) : null
          }

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
