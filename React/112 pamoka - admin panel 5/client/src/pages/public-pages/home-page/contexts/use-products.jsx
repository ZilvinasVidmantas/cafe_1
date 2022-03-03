import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../../services/product-service';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      if (searchParams.get('category')) {
        const fetchedProducts = await ProductService.fetchProducts(searchParams);
        setProducts(fetchedProducts);
      }
    })();
  }, [searchParams]);

  return products;
};

export default useProducts;
