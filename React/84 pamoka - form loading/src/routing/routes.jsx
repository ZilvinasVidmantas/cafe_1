/* eslint-disable */
import HomePage from '../pages/home-page';
import UsersPanelPage from '../pages/users-panel-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import { PUBLIC, VISITOR, ADMIN } from './auth-types';
import RequireVisitor from './require-visitor';

export const HomeRoute = {
  title: 'Home',
  path: '/',
  type: PUBLIC,
  page: <HomePage />,
};

export const UserPanelRoute = {
  title: 'UserPanel',
  path: '/user-panel',
  type: ADMIN,
  page: <UsersPanelPage />,
};

export const LoginRoute = {
  title: 'Login',
  path: '/login',
  type: VISITOR,
  page: <RequireVisitor><LoginPage /></RequireVisitor>,
};

export const RegisterRoute = { 
  title: 'Register',
  path: '/register',
  type: VISITOR,
  page: <RequireVisitor><RegisterPage /></RequireVisitor>,
};

const pageLayoutRoutes = [
  HomeRoute,
  UserPanelRoute,
  LoginRoute,
  RegisterRoute,
]
console.log(pageLayoutRoutes);

export default pageLayoutRoutes;
