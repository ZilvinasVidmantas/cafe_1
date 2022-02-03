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
  useMediaQuery,
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

const StyledDrawer = styled(Drawer)(
  ({ theme, open }) => {
    const drawerWidth = theme.mixins.drawer.width;

    return {
      '& .MuiDrawer-paper': {
        width: drawerWidth,
      },
      [theme.breakpoints.up('md')]: {
        whiteSpace: 'nowrap',
        flexShrink: 0,
        ...(open && {
          ...openedMixin(theme, drawerWidth),
          '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
      },
    };
  },
);

const DashboardLayoutDrawer = ({
  open,
  user,
  handleDrawerClose,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((muiTheme) => muiTheme.breakpoints.down('md'));

  return (
    <StyledDrawer
      variant={isSmallScreen ? 'temporary' : 'permanent'}
      open={open}
      onClose={handleDrawerClose}
    >
      <DrawerHeader sx={{ display: { xs: 'inline-flex', lg: 'none' } }}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List
        sx={({ mixins }) => ({ pt: `${mixins.toolbar.minHeight}px` })}
      >
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
