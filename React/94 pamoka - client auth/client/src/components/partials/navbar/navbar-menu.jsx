import React, { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../../../store/auth';

const NavbarMenu = () => {
  const { user } = useSelector(selectAuth);
  const iconButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography fontSize={14}>{`${user.name} ${user.surname}`}</Typography>
      <Divider
        orientation="vertical"
        light
        flexItem
        sx={{
          borderColor: 'common.white', my: 2, ml: 2,
        }}
        variant="middle"
      />
      <IconButton
        size="large"
        onClick={handleOpen}
        color="inherit"
        ref={iconButtonRef}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={iconButtonRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography textAlign="center">Profile</Typography>
          <PersonIcon />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography textAlign="center">Logout</Typography>
          <PowerSettingsNewIcon />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarMenu;
