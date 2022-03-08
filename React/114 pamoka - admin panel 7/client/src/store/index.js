import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';
import collections from './collections';
import categories from './categories';
import products from './products';

const store = configureStore({
  reducer: {
    users,
    auth,
    collections,
    categories,
    products,
  },
});

export default store;
