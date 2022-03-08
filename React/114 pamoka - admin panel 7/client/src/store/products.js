/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../services/product-service';

const initialState = {
  product: null,
};

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (formData) => {
    const product = await ProductService.createProduct(formData);

    return { product };
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    [createProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      console.log(product);
    },
  },
});

export const { deleteError } = productSlice.actions;

export default productSlice.reducer;
