import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './auth';
import usersReducer from './users';

/*
  Redux reducer:
    Tai funkcija, kuri kviečiama kiekvieną kartą, kuomet siunčiami pakitimai į Redux'ą
    Siunčiant pakitimus, automatiškai vykdomaas reducer'is.
    Reduceris visuomet į parametrus gauna tokius duomenis:
      1 param - redux aplikacijos esamas state
      2 param - siųsto veiksmo (dispatched action) duomenys

    Redux reducer'io tikslas yra gavaus esamą būseną (state) ir išsiųstą veiksmą (action)
    grąžinti VISIŠKAI NAUJAI SUDARYTĄ būseną (state)
*/

const mainReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

const store = createStore(mainReducer, composeWithDevTools());

export default store;
