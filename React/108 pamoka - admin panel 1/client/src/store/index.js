import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';
import collections from './collections';

const store = configureStore({
  reducer: {
    users,
    auth,
    collections,
  },
});

export default store;
