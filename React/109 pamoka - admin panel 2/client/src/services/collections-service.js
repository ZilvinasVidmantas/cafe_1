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

const getCollection = async (id) => {
  const { token } = store.getState().auth;
  const { data } = await requester.get(`/${id}`, {
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

const deleteCollectionItem = async ({ collectionId, itemId }) => {
  const { token } = store.getState().auth;
  await requester.delete(
    `/${collectionId}/${itemId}`, // url
    { // headeriai - užklausos nustatymai
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

const CollectionService = {
  getCollections,
  getCollection,
  createCollectionItem,
  deleteCollectionItem,
};

export default CollectionService;
