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

const updateCollectionItem = async ({ collectionId, itemId, title }) => {
  const { token } = store.getState().auth;
  const { data } = await requester.patch(
    `/${collectionId}/${itemId}`, // url
    { title },
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
  try {
    await requester.delete(
      `/${collectionId}/${itemId}`, // url
      { // headeriai - užklausos nustatymai
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return true;
  } catch (error) {
    return error.response.data.message;
  }
};

const CollectionService = {
  getCollections,
  getCollection,
  createCollectionItem,
  updateCollectionItem,
  deleteCollectionItem,
};

export default CollectionService;
