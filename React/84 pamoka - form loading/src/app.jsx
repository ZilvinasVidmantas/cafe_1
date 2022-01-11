import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import store from './store';
import PageLayout from './components/layouts/page-layout';
import HomePage from './pages/home-page';
import UsersPanelPage from './pages/users-panel-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import RequireVisitor from './routing/require-visitor';

const App = () => (
  <CssBaseline>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/users-panel" element={<UsersPanelPage />} />
            <Route path="/login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
            <Route path="/register" element={<RequireVisitor><RegisterPage /></RequireVisitor>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  </CssBaseline>
);

export default App;
