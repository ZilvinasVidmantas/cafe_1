import axios from 'axios';
import store from '../../../../../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/collections',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getUsers = async () => {
  const { token } = store.getState().auth;
  const { data } = await requester.get('/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const CollectionService = {
  getUsers,
};

export default CollectionService;
