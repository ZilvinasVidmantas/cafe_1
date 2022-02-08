import axios from 'axios';
import store from '../store/index';
import { updateAuthUser } from '../store/auth';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/profile',
});

const uploadImage = async (img) => {
  const { token } = store.getState().auth;
  const formData = new FormData();
  formData.append('img', img);
  const { data } = await requester.put('/img', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  const action = updateAuthUser({ user: data.user });
  store.dispatch(action);
};

const updateProfile = async (formData) => {
  const { token } = store.getState().auth;
  const { data } = await requester.patch('/', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return data;
  // const action = updateAuthUser({ user: data.user });
  // store.dispatch(action);
};

const UserService = {
  uploadImage,
  updateProfile,
};

export default UserService;
