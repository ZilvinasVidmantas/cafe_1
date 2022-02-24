import { VISITOR, ADMIN, LOGGED_IN } from './auth-types';

export default [
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    auth: LOGGED_IN,
    children: [
      // TODO: sukurti index puslapį
      {
        path: null,
        pageName: 'ProfilePage',
        auth: LOGGED_IN,
      },
      {
        path: 'users-panel',
        pageName: 'UsersPanelPage',
        auth: ADMIN,
      },
      {
        path: 'collections',
        pageName: 'CollectionsPage',
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
