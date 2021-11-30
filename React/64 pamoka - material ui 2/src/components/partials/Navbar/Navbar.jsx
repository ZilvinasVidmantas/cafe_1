import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WideContainer from '../../WideContainer';
import AirbnbIcon from '../../AirbnbIcon';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow: theme.shadows[1]
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
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
           <AirbnbIcon/>
          </StyledToolbar>
        </WideContainer>
      </StyledAppBar>
    </Box>
  );
};

export default Navbar;
