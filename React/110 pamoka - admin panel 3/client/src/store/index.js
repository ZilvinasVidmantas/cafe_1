import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';
import collections from './collections';
import categories from './categories';

const store = configureStore({
  reducer: {
    users,
    auth,
    collections,
    categories,
  },
});

export default store;
