import { VISITOR, ADMIN, LOGGED_IN } from './auth-types';

import PageLayout from '../components/layouts/page-layout';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import ErrorPage from '../pages/error-page';

import DashboardLayout from '../components/layouts/dashboard-layout';
import ProfilePage from '../pages/profile-page';
import UsersPanelPage from '../pages/users-panel-page';

export default [
  {
    path: '/dashboard',
    Page: DashboardLayout,
    children: [
      {
        path: 'profile',
        Page: ProfilePage,
        auth: LOGGED_IN,
      },
      {
        path: 'users-panel',
        Page: UsersPanelPage,
        auth: ADMIN,
      },
    ],
  },
  {
    path: '/',
    Page: PageLayout,
    children: [
      {
        path: null,
        Page: HomePage,
      },
      {
        path: 'login',
        Page: LoginPage,
        auth: VISITOR,
      },
      {
        path: 'register',
        Page: RegisterPage,
        auth: VISITOR,
      },
      {
        path: '*',
        Page: ErrorPage,
      },
    ],
  },
];
