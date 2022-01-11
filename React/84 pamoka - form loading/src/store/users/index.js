import { v4 as createId } from 'uuid';
import changeState from 'immer';
import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from './action-types';

const initState = {
  collection: [
    { id: '1', name: 'Kevinas', age: 12 },
    { id: '2', name: 'Silensis', age: 19 },
    { id: '3', name: 'Vakunda', age: 7 },
    { id: '4', name: 'Majoris', age: 9 },
    { id: '5', name: 'Bagnis', age: 98 },
  ],
};

// eslint-disable-next-line default-param-last
const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return changeState(state, (newState) => {
        const newUser = {
          id: createId(),
          name: action.payload.name,
          age: action.payload.age,
        };
        newState.collection.push(newUser);
      });

    case DELETE_USER:
      return changeState(state, (newState) => {
        const userToDeleteIndex = newState.collection.findIndex((u) => u.id === action.payload.id);
        newState.collection.splice(userToDeleteIndex, 1);
      });

    case UPDATE_USER:
      return changeState(state, (newState) => {
        const userToUpdate = newState.collection.find((u) => u.id === action.payload.id);
        userToUpdate.age = action.payload.age;
        userToUpdate.name = action.payload.name;
      });

    default:
      return state;
  }
};

export default usersReducer;
