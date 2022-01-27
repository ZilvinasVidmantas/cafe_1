import { createSlice } from '@reduxjs/toolkit';
import { v4 as createId } from 'uuid';

const initialState = {
  collection: [
    { id: '1', name: 'Kevinas', age: 12 },
    { id: '2', name: 'Silensis', age: 19 },
    { id: '3', name: 'Vakunda', age: 7 },
    { id: '4', name: 'Majoris', age: 9 },
    { id: '5', name: 'Bagnis', age: 98 },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
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

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export const selectUsers = (state) => state.users.collection;

export default userSlice.reducer;
