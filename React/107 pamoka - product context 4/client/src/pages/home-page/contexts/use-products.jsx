import { useState, useEffect } from 'react';
import ProductService from '../../../services/product-service';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await ProductService.fetchProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return products;
};

export default useProducts;
