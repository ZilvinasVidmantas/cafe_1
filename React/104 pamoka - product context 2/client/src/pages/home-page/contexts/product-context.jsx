import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';
import iconMap from './icon-map';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState([]);

  const changeCategory = (id) => {
    setSearchParams({ category: id });
    setSelectedCategory(id);
  };

  const changeRangeFilter = (filter, { min, max }) => {
    console.log({ min, max });

    return filter;
  };

  const changeAutocompleteFilter = (filter, { action, option }) => {
    const newFilter = { ...filter };

    switch (action) {
      case 'add':
        newFilter.options.find((x) => x.id === option.id)
          .selected = true;
        break;
      case 'remove':
        newFilter.options.find((x) => x.id === option.id)
          .selected = false;
        break;
      default: break;
    }

    return newFilter;
  };

  const changeOptionsFilter = (filter, { option }) => {
    console.log({ option });

    return filter;
  };

  const changeFilterSelect = {
    range: changeRangeFilter,
    autocomplete: changeAutocompleteFilter,
    options: changeOptionsFilter,
  };

  const changeFilter = (id, type, props) => {
    const updatedFilters = filters.map((filter) => (filter.id === id
      ? changeFilterSelect[type](filter, props)
      : filter));
    setFilters(updatedFilters);
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

      const configuredFilters = filtersData.map((filter) => {
        const configuredFilter = { ...filter };
        switch (filter.type) {
          case 'autocomplete':
            configuredFilter.options = filter.options.map((x) => ({ ...x, selected: false }));
            break;
          case 'range':
            configuredFilter.currMin = configuredFilter.min;
            configuredFilter.currMax = configuredFilter.max;
            break;
          case 'options':
            configuredFilter.options = filter.options.map((x) => ({ ...x, checked: false }));
            break;
          default:
            break;
        }

        return configuredFilter;
      });
      setFilters(configuredFilters);

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
    changeFilter,
  }), [categories, selectedCategory, filters]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
