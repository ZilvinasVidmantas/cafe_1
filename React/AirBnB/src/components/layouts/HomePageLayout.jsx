import React from 'react';
import WideContainer from '../WideContainer';
import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";

const HomePageLayout = ({ children }) => {
  return (
    <Box component="main">
      <WideContainer>
        {children}
        <Outlet />
      </WideContainer>
    </Box>
  );
};

export default HomePageLayout;
