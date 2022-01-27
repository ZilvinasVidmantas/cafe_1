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
    const reduxAction = authSlice.login({ user, token, redirectTo });
    store.dispatch(reduxAction);
    return true;
  }

  throw new Error(data.message);
};

const checkEmail = async (email) => {
  const response = await fetch(`http://localhost:5000/api/auth/check-email?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.available;
};

const register = async (body) => {
  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (response.status === 200) {
    const { user, token } = data;
    const reduxAction = authSlice.login({ user, token });
    store.dispatch(reduxAction);
    return true;
  }

  throw new Error(data.message);
};

export default {
  login,
  checkEmail,
  register,
};
