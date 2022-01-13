import { VISITOR, ADMIN } from './auth-types';
import {
  HomeRoute,
  UsersPanelRoute,
  LoginRoute,
  RegisterRoute,
} from './routes';
import HomePage from '../pages/home-page';
import UsersPanelPage from '../pages/users-panel-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';

export const HomeRouteConnector = {
  title: 'Home',
  route: HomeRoute,
  Page: HomePage,
};

export const UsersPanelRouteConnector = {
  title: 'Users panel',
  route: UsersPanelRoute,
  auth: ADMIN,
  Page: UsersPanelPage,
};

export const LoginRouteConnector = {
  title: 'Login',
  route: LoginRoute,
  auth: VISITOR,
  Page: LoginPage,
};

export const RegisterRouteConnector = {
  title: 'Register',
  route: RegisterRoute,
  auth: VISITOR,
  Page: RegisterPage,
};

export const pageLayoutRoutes = [
  HomeRouteConnector,
  LoginRouteConnector,
  RegisterRouteConnector,
];
