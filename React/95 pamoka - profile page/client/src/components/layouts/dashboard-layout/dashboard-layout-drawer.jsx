import React from 'react';
import {
  styled,
  useTheme,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

import openedMixin from './mixins/opened-mixin';
import closedMixin from './mixins/closed-mixin';
import DrawerHeader from './dashboard-layout-drawer-header';
import routes from '../../../routing/routes';

const notForwardableProps = ['open', 'drawerWidth'];

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (propName) => !notForwardableProps.includes(propName),
})(
  ({ theme, open, drawerWidth }) => ({
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

const DashboardLayoutDrawer = ({
  open,
  user,
  handleDrawerClose,
  drawerWidth,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <StyledDrawer variant="permanent" open={open} drawerWidth={drawerWidth}>
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
        { user && user.role === 'ADMIN'
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
          ) : null}

      </List>
    </StyledDrawer>
  );
};

export default DashboardLayoutDrawer;
