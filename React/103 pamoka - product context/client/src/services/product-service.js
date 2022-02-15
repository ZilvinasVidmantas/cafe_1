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
    return data.products;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchCategories = async () => {
  try {
    const { data } = await requester.get('/categories');
    return data.categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProductService = {
  fetchProducts,
  fetchCategories,
};

export default ProductService;
