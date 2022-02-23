import React, { createContext, useMemo } from 'react';
import useCategories from './use-categories';
import useFilters from './use-filters';
import useProducts from './use-products';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { categories, selectedCategory, changeCategory } = useCategories();
  const { filters, changeFilter } = useFilters(selectedCategory);
  const products = useProducts(selectedCategory);

  const contextValue = useMemo(() => ({
    products,
    filters,
    categories,
    selectedCategory,
    changeCategory,
    changeFilter,
  }), [categories, selectedCategory, filters, products]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
