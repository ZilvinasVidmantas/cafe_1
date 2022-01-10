import { LOGIN_SUCCESS } from './action-types';

export const createLoginSuccessAction = ({ token, user }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
    token,
  },
});

export const logoutAction = {
  // jūsų struktūra
};

export default {
  createLoginSuccessAction,
  logoutAction,
};
