import axios from 'axios';
import store from '../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/collections/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getCollections = async () => {
  const { token } = store.getState().auth;
  const { data } = await requester.get('/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const createCollectionItem = async ({ collectionId, title }) => {
  const { token } = store.getState().auth;
  const { data } = await requester.post(
    `/${collectionId}`, // url
    { title }, // Duomenys
    { // headeriai - užklausos nustatymai
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

const CollectionService = {
  getCollections,
  createCollectionItem,
};

export default CollectionService;
