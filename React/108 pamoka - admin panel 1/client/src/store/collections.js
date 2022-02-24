/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CollectionService from '../services/collections-service';

const initialState = {
  isFetched: false,
  collections: [],
};

export const fetchCollections = createAsyncThunk(
  'auth/fetchCollections',
  async (_, { getState }) => {
    const { collections: { isFetched, collections } } = getState();
    if (!isFetched) {
      const fetchedCollections = await CollectionService.getCollections();
      return fetchedCollections;
    }
    return collections;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchCollections.fulfilled]: (state, action) => {
      state.collections = action.payload;
      state.isFetched = true;
    },
  },
});

export const collectionsSelector = (state) => state.collections.collections;
export const collectionSelector = (id) => (state) => state.collections
  .collections.find((x) => x.id === id);

export default authSlice.reducer;
