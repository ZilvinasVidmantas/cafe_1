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
import ApartmentLocationPage from './pages/ApartmentLocationPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/location" element={<ApartmentLocationPage />} />
            <Route path="/apartments" element={<ApartmentGridPage />} />

            {/* <Route path="/" element={<HomePage />} > 
               <Route path="search" element={<SearchPage />} > 
                   <Route path="location" element={<ApartmentLocationPage />} /> 
                   <Route path="apartments" element={<ApartmentGridPage />} />
                </Route>
            </Route> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
};

export default App;

