import { LOGIN_SUCCESS, LOGOUT } from './action-types';

export const createLoginSuccessAction = ({ token, user }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
    token,
  },
});

export const logoutAction = { type: LOGOUT };

export default {
  createLoginSuccessAction,
  logoutAction,
};
