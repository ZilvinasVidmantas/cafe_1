import { createStore } from 'redux';
import { v4 as createId } from 'uuid';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from './action-types';

const initState = {
  users: [
    { id: '1', name: 'Kevinas', age: 12 },
    { id: '2', name: 'Silensis', age: 19 },
    { id: '3', name: 'Vakunda', age: 7 },
    { id: '4', name: 'Majoris', age: 9 },
    { id: '5', name: 'Bagnis', age: 98 },
  ],
};

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

// eslint-disable-next-line default-param-last
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, {
          id: createId(),
          name: action.payload.name,
          age: action.payload.age,
        }],
      };

    case DELETE_USER:
      return {
        users: state.users.filter((x) => x.id !== action.payload.id),
      };

    case UPDATE_USER:
      return {
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              ...action.payload,
            };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
