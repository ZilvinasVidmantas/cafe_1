import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      if (searchParams.get('category')) {
        const paginatedResult = await ProductService.fetchProducts(searchParams);
        console.log(paginatedResult);
        setProducts(paginatedResult.products);
      }
    })();
  }, [searchParams]);

  return products;
};

export default useProducts;
