import axios from 'axios';
import store from '../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const uploadImage = async (img) => {
  console.log('Img', img);
  const { token } = store.getState().auth;
  const response = await requester.put('/profile/img', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
};

const UserService = {
  uploadImage,
};

export default UserService;
