import axios from 'axios';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchProducts = async () => {
  try {
    const { data } = await requester.get('/products');
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

const fetchFilters = async (filterIds) => {
  // 1, 2, 3, 4
  // ?id=1&id=2&id=4&id=3
  let queryParams = '';
  if (filterIds instanceof Array && filterIds.length > 0) {
    queryParams = `?${filterIds.map((id) => `id=${id}`).join('&')}`;
  }
  console.log({ filterIds, queryParams });

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
