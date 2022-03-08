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

export const fetchProduct = createAsyncThunk(
  'product/fetch',
  async (id) => {
    const product = await ProductService.fetchProduct(id);

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
    resetProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers: {
    [createProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.product = product;
    },

    [fetchProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.product = product;
    },
  },
});

export const { deleteError, resetProduct } = productSlice.actions;

export const productSelector = (state) => state.product.product;

export default productSlice.reducer;
