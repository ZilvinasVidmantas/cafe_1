import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/partials/Navbar/Navbar';
import Task1 from './Task1';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './styles/lightTheme';
import WideContainer from './components/WideContainer';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Navbar />
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
      </CssBaseline>
    </ThemeProvider>
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
