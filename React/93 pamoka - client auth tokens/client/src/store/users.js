/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as createId } from 'uuid';

const initialState = {
  collection: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers(state, { payload }) {
      state.collection = payload.users;
    },
    addUser(state, { payload }) {
      const newUser = {
        id: createId(),
        name: payload.name,
        age: payload.age,
      };
      state.collection.push(newUser);
    },
    deleteUser(state, { payload }) {
      const userToDeleteIndex = state.collection.findIndex((u) => u.id === payload.id);
      state.collection.splice(userToDeleteIndex, 1);
    },
    updateUser(state, { payload }) {
      const userToUpdate = state.collection.find((u) => u.id === payload.id);
      userToUpdate.age = payload.age;
      userToUpdate.name = payload.name;
    },
  },
});

export const {
  addUser,
  deleteUser,
  updateUser,
  loadUsers,
} = userSlice.actions;

export const selectUsers = (state) => state.users.collection;

export default userSlice.reducer;
