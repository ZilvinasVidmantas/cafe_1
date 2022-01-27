import store from '../store/index';
import * as authSlice from '../store/auth';

const login = async ({ email, password }, redirectTo) => {
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.status === 200) {
    const { user, token } = data;
    const loginSuccessAction = authSlice.login({ user, token, redirectTo });
    store.dispatch(loginSuccessAction);
    return true;
  }

  throw new Error(data.message);
};

const checkEmail = (email) => new Promise(((success) => {
  const existingEmails = ['admin@gmail.com', 'user1@gmail.com'];
  setTimeout(() => {
    const emailAvailable = !existingEmails.includes(email);
    success(emailAvailable);
  }, 1000);
}));

const register = () => new Promise(((success) => {
  setTimeout(() => {
    success(true);
  }, 2000);
}));

export default {
  login,
  checkEmail,
  register,
};
