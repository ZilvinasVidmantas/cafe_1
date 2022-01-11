import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import PageLayout from '../components/layouts/page-layout';
import HomePage from '../pages/home-page';
import UsersPanelPage from '../pages/users-panel-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import RequireVisitor from './require-visitor';
import {
  UserPanelRoute,
  LoginRoute,
  RegisterRoute,
} from './routes';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path={UserPanelRoute.path} element={<UsersPanelPage />} />
        <Route path={LoginRoute.path} element={<RequireVisitor><LoginPage /></RequireVisitor>} />
        <Route
          path={RegisterRoute.path}
          element={<RequireVisitor><RegisterPage /></RequireVisitor>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
