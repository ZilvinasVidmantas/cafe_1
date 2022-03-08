/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../services/product-service';

const initialState = {
  product: null,
};

export const createProduct = createAsyncThunk(
  'product/create',
  async (formData) => {
    const product = await ProductService.createProduct(formData);

    return { product };
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    [createProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.product = product;
    },
  },
});

export const { deleteError } = productSlice.actions;

export const productSelector = (state) => state.product.product;

export default productSlice.reducer;
