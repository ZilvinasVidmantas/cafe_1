import { PUBLIC, VISITOR, ADMIN } from './auth-types';

export const HomeRoute = { title: 'Home', link: '/', type: PUBLIC };
export const UserPanelRoute = { title: 'UserPanel', link: '/user-panel', type: ADMIN };
export const LoginRoute = { title: 'Login', link: '/login', type: VISITOR };
export const RegisterRoute = { title: 'Register', link: '/register', type: VISITOR };
