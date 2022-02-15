/* eslint-disable no-unused-vars */
import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';
import iconMap from './icon-map';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState([]);

  const changeCategory = (id) => {
    setSearchParams({ category: id });
    setSelectedCategory(id);
  };

  useEffect(() => {
    (async () => {
      const categoryData = await ProductService.fetchCategories();
      const fetchedCategories = categoryData.map(({ icon, ...x }) => ({
        ...x,
        Icon: iconMap[icon],
      }));

      const categoryParam = searchParams.get('category');
      const foundCategory = fetchedCategories.find((x) => x.id === categoryParam);
      const category = foundCategory ?? fetchedCategories[0];
      if (!foundCategory) {
        setSearchParams({ category: category.id });
      }
      setSelectedCategory(category.id);
      setCategories(fetchedCategories);
      // FILTRAI
      const filtersData = await ProductService.fetchFilters(category.id);
      // REIK PATURBINT
      setFilters(filtersData);

      // const fetchedFilters = await ProductService.fetchFilters();
      // const fetchedProducts = await ProductService.fetchProducts();
      // setFilters(fetchedFilters);
      // setProducts(fetchedProducts);
    })();
  }, []);

  const contextValue = useMemo(() => ({
    products,
    filters,
    categories,
    selectedCategory,
    changeCategory,
  }), [categories, selectedCategory]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
