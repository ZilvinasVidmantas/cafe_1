import { VISITOR, ADMIN, LOGGED_IN } from './auth-types';

export default [
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    auth: LOGGED_IN,
    children: [
      {
        path: null,
        pageName: 'ProfilePage',
        auth: LOGGED_IN,
      },
      {
        path: 'collections',
        pageName: 'CollectionsPage',
        auth: ADMIN,
      },
      {
        path: 'collections/:collectionTitle',
        pageName: 'CollectionPanelPage',
        auth: ADMIN,
      },
      {
        path: 'categories',
        pageName: 'CategoryPanelPage',
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
