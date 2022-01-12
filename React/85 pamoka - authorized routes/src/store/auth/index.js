/* eslint-disable no-param-reassign */
import changeState from 'immer';
import { LOGIN_SUCCESS, LOGOUT } from './action-types';
import SessionStorage from '../../libs/SessionStorage';

const initState = SessionStorage.get('auth') ?? {
  loggedIn: false,
  token: null,
  user: null,
  redirectTo: null,
};

// eslint-disable-next-line default-param-last
const authReducer = (oldState = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const newState = changeState(oldState, (state) => {
        state.loggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.redirectTo = action.payload.redirectTo;
      });
      SessionStorage.set('auth', newState);

      return newState;
    }
    case LOGOUT: {
      const newState = changeState(oldState, (state) => {
        state.loggedIn = false;
        state.token = null;
        state.user = null;
        state.redirectTo = null;
      });
      SessionStorage.clear('auth');

      return newState;
    }
    default:
      return oldState;
  }
};

export default authReducer;
