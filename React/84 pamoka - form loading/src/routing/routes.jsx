/* eslint-disable */
import HomePage from '../pages/home-page';
import UsersPanelPage from '../pages/users-panel-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import { PUBLIC, VISITOR, ADMIN } from './auth-types';

export const HomeRoute = {
  title: 'Home',
  path: '/',
  type: PUBLIC,
  page: <HomePage />,
};

export const UsersPanelRoute = {
  title: 'Users panel',
  path: '/users-panel',
  type: ADMIN,
  page: <UsersPanelPage />,
};

export const LoginRoute = {
  title: 'Login',
  path: '/login',
  type: VISITOR,
  page: <LoginPage />,
};

export const RegisterRoute = { 
  title: 'Register',
  path: '/register',
  type: VISITOR,
  page: <RegisterPage />,
};

export const pageLayoutRoutes = [
  HomeRoute,
  UsersPanelRoute,
  LoginRoute,
  RegisterRoute,
];

