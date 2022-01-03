import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import store from './store';
import HomePage from './pages/home-page';
import UsersPanelPage from './pages/users-panel-page';
import PageLayout from './components/layouts/page-layout';

const App = () => (
  <CssBaseline>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/users-panel" element={<UsersPanelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  </CssBaseline>
);

export default App;
