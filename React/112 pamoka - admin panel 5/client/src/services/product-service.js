import axios from 'axios';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchProducts = async (searchParams) => {
  try {
    const { data } = await requester.get(`/products?${searchParams.toString()}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchCategories = async () => {
  try {
    const { data } = await requester.get('/categories');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchFilters = async (categoryId) => {
  let queryParams = '';
  if (categoryId) {
    queryParams = `?category=${categoryId}`;
  }

  try {
    const { data } = await requester.get(`/filters${queryParams}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProductService = {
  fetchProducts,
  fetchCategories,
  fetchFilters,
};

export default ProductService;
