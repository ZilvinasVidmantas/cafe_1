import { VISITOR, ADMIN, LOGGED_IN } from './auth-types';

export default [
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    children: [
      {
        path: 'profile',
        pageName: 'ProfilePage',
        auth: LOGGED_IN,
      },
      {
        path: 'users-panel',
        pageName: 'UsersPanelPage',
        auth: ADMIN,
      },
    ],
  },
  {
    path: '/',
    pageName: 'PageLayout',
    children: [
      {
        path: null,
        pageName: 'HomePage',
      },
      {
        path: 'login',
        pageName: 'LoginPage',
        auth: VISITOR,
      },
      {
        path: 'register',
        pageName: 'RegisterPage',
        auth: VISITOR,
      },
      {
        path: '*',
        pageName: 'ErrorPage',
      },
    ],
  },
];
