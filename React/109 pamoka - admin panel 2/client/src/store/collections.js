/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CollectionService from '../services/collections-service';

const initialState = {
  isFetched: false,
  collections: [],
};

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, { getState }) => {
    const { collections: { isFetched, collections } } = getState();
    if (!isFetched) {
      const fetchedCollections = await CollectionService.getCollections();
      return { collections: fetchedCollections };
    }
    return { collections };
  },
);

export const fetchCollection = createAsyncThunk(
  'collections/fetchCollection',
  async (id) => {
    const fetchedCollection = await CollectionService.getCollection(id);
    return { collection: fetchedCollection };
  },
);

export const createCollectionItem = createAsyncThunk(
  'collections/createItem',
  async ({ collectionId, title }) => {
    const newItem = await CollectionService.createCollectionItem({
      collectionId,
      title,
    });

    return { newItem, collectionId };
  },
);

export const deleteCollectionItem = createAsyncThunk(
  'collections/fetchCollections',
  async ({ collectionId, itemId }) => {
    await CollectionService.deleteCollectionItem({ collectionId, itemId });
    return { collectionId, itemId };
  },
);

const authSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchCollections.fulfilled]: (state, { payload }) => {
      state.collections = payload.collections;
      state.isFetched = true;
    },

    [fetchCollection.fulfilled]: (state, { payload }) => {
      state.collections.push(payload.collection);
    },

    [createCollectionItem.fulfilled]: (state, { payload }) => {
      const { newItem, collectionId } = payload;
      const collection = state.collections.find((x) => x.id === collectionId);
      collection.data.push(newItem);
    },

    [deleteCollectionItem.fulfilled]: (state, { payload }) => {
      const { itemId, collectionId } = payload;
      const collection = state.collections.find((x) => x.id === collectionId);
      collection.data = collection.data.filter((x) => x.id !== itemId);
    },
  },
});

export const collectionsSelector = (state) => state.collections.collections;
export const collectionSelector = (id) => (state) => state.collections
  .collections.find((x) => x.id === id);

export default authSlice.reducer;
