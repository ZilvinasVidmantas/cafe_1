import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/partials/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './styles/lightTheme';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ApartmentGridPage from './pages/ApartmentGridPage';

/*
  Sukurkite puslapį <ApartmentLocationPage>, kuris būtų pasiekiamas adresu '/search/location'
*/

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/search/apartments" element={ <ApartmentGridPage />} />
          </Routes>
        </BrowserRouter>
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
