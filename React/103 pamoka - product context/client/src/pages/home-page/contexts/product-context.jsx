import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import ProductService from '../../../services/product-service';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCategories = await ProductService.fetchCategories();
      const fetchedFilters = await ProductService.fetchFilters();
      const fetchedProducts = await ProductService.fetchProducts();
      setCategories(fetchedCategories);
      setFilters(fetchedFilters);
      setProducts(fetchedProducts);
    })();
  }, []);

  const value = useMemo(() => ({
    products,
    filters,
    categories,
  }), []);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
