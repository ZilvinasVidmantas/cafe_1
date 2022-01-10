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

/*
  Pertrauka: 19:05

  Sukurkite atsijungimo funkcionalumą paspaudus Logout mygtuką:
    1. Sukurkite Action-type: LOGOUT
    2. Aprašykite veiksmą: logoutAction
    3. šiame faile apdorokite LOGOUT veiksmą
    4. Įgalinkite logoutAction veiksmo siuntimą paspaudus LOGOUT mygtuką Navbar'e

  Tęsiame 19:25
*/
