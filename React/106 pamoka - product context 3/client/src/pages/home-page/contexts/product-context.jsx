import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';
import iconMap from './icon-map';

export const ProductContext = createContext();

const searchParamsToObject = (searchParams) => {
  const paramsObject = {};
  searchParams.forEach((value, key) => {
    if (paramsObject[key]) {
      paramsObject[key].push(value);
    } else {
      paramsObject[key] = [value];
    }
  });
  return paramsObject;
};

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

  const syncFiltersWithUrlParams = (newFilters) => {
    const urlParams = searchParamsToObject(searchParams);
    newFilters.forEach((filter) => {
      switch (filter.type) {
        case 'autocomplete':
          urlParams[filter.name] = filter.options
            .filter((x) => x.selected)
            .map((x) => x.id);
          break;
        case 'range':
          // Range tipo filtro kovertavimas į parametrus
          break;
        case 'options':
          urlParams[filter.name] = filter.options
            .filter((x) => x.checked)
            .map((x) => x.id);
          break;
        default:
          break;
      }
    });
    setSearchParams(urlParams);
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

  const changeRangeFilter = (filter, { min, max }) => {
    console.log({ min, max });

    return filter;
  };

  const changeOptionsFilter = (filter, { id, checked }) => {
    const option = filter.options.find((x) => x.id === id);
    option.checked = checked;

    return filter;
  };

  const changeFilterMap = {
    autocomplete: changeAutocompleteFilter,
    range: changeRangeFilter,
    options: changeOptionsFilter,
  };

  const changeFilter = (id, type, props) => {
    const updatedFilters = filters.map((filter) => (filter.id === id
      ? changeFilterMap[type](filter, props)
      : filter));
    setFilters(updatedFilters);
    syncFiltersWithUrlParams(updatedFilters);
  };

  const setCategoryFromUrl = (fetchedCategories) => {
    const categoryParam = searchParams.get('category');
    const foundCategory = fetchedCategories.find((x) => x.id === categoryParam);
    const category = foundCategory ?? fetchedCategories[0];
    if (!foundCategory) {
      setSearchParams({ category: category.id });
    }
    setSelectedCategory(category.id);
    setCategories(fetchedCategories);

    return category.id;
  };

  const setFilterByCategorySettings = async (categoryId) => {
    const filtersData = await ProductService.fetchFilters(categoryId);
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

    configuredFilters.forEach((filter) => {
      const urlOptions = searchParams.getAll(filter.name);
      if (urlOptions.length > 0) {
        switch (filter.type) {
          case 'autocomplete':
            urlOptions.forEach((id) => {
              const option = filter.options.find((x) => x.id === id);
              if (option) {
                option.selected = true;
              }
            });
            break;
          case 'range':
            break;
          case 'options':
            urlOptions.forEach((id) => {
              const option = filter.options.find((x) => x.id === id);
              if (option) {
                option.checked = true;
              }
            });
            break;

          default:
            break;
        }
      }
    });

    return configuredFilters;
  };

  useEffect(() => {
    (async () => {
      const categoryData = await ProductService.fetchCategories();
      const fetchedCategories = categoryData.map(({ icon, ...x }) => ({
        ...x,
        Icon: iconMap[icon],
      }));
      const categoryId = setCategoryFromUrl(fetchedCategories);
      const configuredFilters = await setFilterByCategorySettings(categoryId);

      setFilters(configuredFilters);
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
