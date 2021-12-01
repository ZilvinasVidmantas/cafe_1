import React from 'react';
import WideContainer from '../components/WideContainer';
import { Box } from '@mui/material';
import Task1 from '../components/Task1';

const HomePage = () => {
  return (
    <div>
      <Box component="main">
          <WideContainer>
            <Task1 />
            <Task1 />
            <Task1 />
            <Task1 />
            <Task1 />
            <Task1 />
            <Task1 />
            <Task1 />
            <Task1 />
          </WideContainer>
        </Box>
    </div>
  );
};

export default HomePage;
