import React from 'react';
import {
  Box,
  Container
} from '@mui/material';
import Task1 from './Task1';

const App = () => {
  return (
    <Box component="main">
      <Container>
        <Task1 />
      </Container>
    </Box>
  )
};

export default App;

/*
  1. Atnaujintike <Task1> komponentą panaudodami:
    https://mui.com/components/avatars/

  2. task2.jpg TIK VAIZDAS, BE FUNKCIONALUMO  
    pavyzdys: PAMATYSITE PA'SCROLL'INUS Į APAČIĄ
      https://www.airbnb.lt/
    Sukurkite analogišką navbar, kaip task2/jpg
      Reikalingi komponentai:
        Container - https://mui.com/api/container/
        App Bar - https://mui.com/components/app-bar/
*/
