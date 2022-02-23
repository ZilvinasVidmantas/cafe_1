import React, {
  createContext, useState, useMemo,
} from 'react';
import useCategories from './use-categories';
import useFilters from './use-filters';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { categories, selectedCategory, changeCategory } = useCategories();
  const { filters, changeFilter } = useFilters(selectedCategory);
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  const contextValue = useMemo(() => ({
    products,
    filters,
    categories,
    selectedCategory,
    changeCategory,
    changeFilter,
  }), [categories, selectedCategory, filters]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
