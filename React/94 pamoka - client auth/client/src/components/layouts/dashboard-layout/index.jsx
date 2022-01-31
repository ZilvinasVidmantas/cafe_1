import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/auth';

import DrawerHeader from './dashboard-layout-drawer-header';
import openedMixin from './mixins/opened-mixin';
import closedMixin from './mixins/closed-mixin';
import AppBar from './dashboard-layout-app-bar';
import AuthMenu from '../../auth-menu';
import NavbarLink from '../../navbar-link';
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
        <Container
          maxWidth="xxl"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: 1 / 1,
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
                display: open ? 'none' : 'inline-flex',
              }}
            >
              <MenuIcon />
            </IconButton>
            <NavbarLink to={routes.HomePage}>Home</NavbarLink>
          </Box>
          <AuthMenu />
        </Container>
      </AppBar>
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
