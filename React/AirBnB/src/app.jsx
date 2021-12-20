import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import lightTheme from './styles/light-theme';
import Navbar from './components/partials/navbar/navbar';
import HomePageLayout from './components/layouts/home-page-layout';
import HomePage from './pages/home-page';
import ApartmentGridPage from './pages/apartment-grid-page/apartment-grid-page';
import ApartmentLocationPage from './pages/apartment-location-page';
import SearchPage from './pages/search-page';
import ApartmentPage from './pages/apartment-page';
import NotFoundPage from './pages/not-found-page';

const App = () => (
  <LocalizationProvider dateAdapter={DateAdapter}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="apartment-location" element={<ApartmentLocationPage />} />
              <Route path="apartment-grid" element={<ApartmentGridPage />} />
              <Route path="apartment/:id" element={<ApartmentPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </LocalizationProvider>

);

export default App;
