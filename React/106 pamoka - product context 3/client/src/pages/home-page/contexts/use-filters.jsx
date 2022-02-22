import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';

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

const useFilters = (selectedCategory) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState([]);

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
          if (filter.currMin > filter.min) {
            urlParams[`${filter.name}_min`] = filter.currMin;
          } else {
            delete urlParams[`${filter.name}_min`];
          }
          if (filter.currMax < filter.max) {
            urlParams[`${filter.name}_max`] = filter.currMax;
          } else {
            delete urlParams[`${filter.name}_max`];
          }
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

  const changeRangeFilter = (filter, [min, max]) => ({
    ...filter,
    currMin: min,
    currMax: max,
  });

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
      const filterRef = filter;
      const urlOptions = searchParams.getAll(filter.name);
      const minUrlOption = searchParams.get(`${filter.name}_min`);
      const maxUrlOption = searchParams.get(`${filter.name}_max`);

      if ([...urlOptions, minUrlOption, maxUrlOption].length > 0) {
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
            if (minUrlOption) {
              filterRef.currMin = Number(minUrlOption);
            }
            if (maxUrlOption) {
              filterRef.currMax = Number(maxUrlOption);
            }
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
    if (selectedCategory) {
      (async () => {
        const configuredFilters = await setFilterByCategorySettings(selectedCategory);

        setFilters(configuredFilters);
      })();
    }
  }, [selectedCategory]);

  return { filters, changeFilter };
};

export default useFilters;
