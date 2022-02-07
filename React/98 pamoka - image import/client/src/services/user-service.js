import axios from 'axios';
import store from '../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

const uploadImage = async (img) => {
  const { token } = store.getState().auth;
  const formData = new FormData();
  formData.append('img', img);
  const response = await requester.put('/profile/img', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(response);
};

const UserService = {
  uploadImage,
};

export default UserService;
