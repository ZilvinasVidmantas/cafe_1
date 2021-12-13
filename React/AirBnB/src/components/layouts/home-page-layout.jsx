import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import WideContainer from '../wide-container';

const HomePageLayout = ({ children }) => (
  <Box component="main">
    <WideContainer>
      {children}
      <Outlet />
    </WideContainer>
  </Box>
);

export default HomePageLayout;
