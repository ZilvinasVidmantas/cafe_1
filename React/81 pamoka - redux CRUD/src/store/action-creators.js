import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from './action-types';

export const createAddUserAction = ({ name, age }) => ({
  type: ADD_USER,
  payload: {
    name,
    age: Number(age),
  },
});

export const createUpdateUserAction = ({ id, name, age }) => ({
  type: UPDATE_USER,
  payload: {
    id,
    name,
    age: Number(age),
  },
});

export const createDeleteUserAction = (id) => ({
  type: DELETE_USER,
  payload: { id },
});

export default {
  createAddUserAction,
  createDeleteUserAction,
  createUpdateUserAction,
};
