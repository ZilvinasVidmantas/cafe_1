/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CategoriesService from '../services/categories-service';

const initialState = {
  isFetched: false,
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { getState }) => {
    const { collections: { isFetched, categories } } = getState();
    if (!isFetched) {
      const fetchedCategories = await CategoriesService.getCategories();
      return { categories: fetchedCategories };
    }
    return { categories };
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    deleteError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload.categories;
      state.isFetched = true;
    },
  },
});

export const { deleteError } = categoriesSlice.actions;

export const categoriesSelector = (state) => state.categories.categories;

export default categoriesSlice.reducer;
