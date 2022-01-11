import { PUBLIC, VISITOR, ADMIN } from './auth-types';

export const HomeRoute = { title: 'Home', path: '/', type: PUBLIC };
export const UserPanelRoute = { title: 'UserPanel', path: '/user-panel', type: ADMIN };
export const LoginRoute = { title: 'Login', path: '/login', type: VISITOR };
export const RegisterRoute = { title: 'Register', path: '/register', type: VISITOR };
