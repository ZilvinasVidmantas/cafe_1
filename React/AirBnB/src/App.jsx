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

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import HomePageLayout from './components/layouts/HomePageLayout';
import HomePage from './pages/HomePage';
import ApartmentGridPage from './pages/ApartmentGridPage';
import ApartmentLocationPage from './pages/ApartmentLocationPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePageLayout />} >
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="apartment-location" element={<ApartmentLocationPage />} />
                <Route path="apartment-grid" element={<ApartmentGridPage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </LocalizationProvider >

  )
};

export default App;

