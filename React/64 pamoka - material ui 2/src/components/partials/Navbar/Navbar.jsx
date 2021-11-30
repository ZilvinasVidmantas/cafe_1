import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WideContainer from '../../WideContainer';
import IconSection from './IconSection';
import SearchSection from './SearchSection';
import UserSection from './UserSection';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.common.white,
  boxShadow: theme.shadows[1]
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  [theme.breakpoints.up('sm')]: {
    padding: 0
  }
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <WideContainer>
          <StyledToolbar>
            <Box sx={{ display: 'flex', alignItems: 'stretch', width: 1/2 }}>
              <IconSection />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', flexBasis: 348, flexShrink: 0 }}>
              <SearchSection />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 1/2  }}>
              <UserSection />
            </Box>
          </StyledToolbar>
        </WideContainer>
      </StyledAppBar>
    </Box>
  );
};

export default Navbar;
