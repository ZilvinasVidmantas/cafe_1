/* eslint-disable no-param-reassign */
import changeState from 'immer';
import { LOGIN_SUCCESS } from './action-types';

const initState = {
  loggedIn: false,
  token: null,
  user: null,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return changeState(state, (newState) => {
        newState.loggedIn = true;
        newState.token = action.payload.token;
        newState.user = action.payload.user;
      });
    }
    default:
      return state;
  }
};

export default authReducer;
