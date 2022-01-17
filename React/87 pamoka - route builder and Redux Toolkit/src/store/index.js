import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';

const store = configureStore({
  reducer: {
    users,
    auth,
  },
});

export default store;
