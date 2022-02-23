import database from '../database/index.js';

const filterByRange = (products, filter, queryParams) => {
  const min = Number(queryParams[`${filter.name}_min`]);
  const max = Number(queryParams[`${filter.name}_max`]);

  if (min) {
    products = products.filter(x => x[filter.property] >= min);
  }
  if (max) {
    products = products.filter(x => x[filter.property] <= max);
  }

  return products;
}

const filterByOptions = (products, filter, queryParams) => {
  const options = [].concat(queryParams[filter.name]).filter(x => x !== undefined);
  if (options.length > 0) {
    products = products.filter(x => options.includes(x[filter.property]));
  }
  return products;
}

export const getProducts = (req, res) => {
  console.log('---------------------------------');
  const { products, categories, filters } = database.data;
  const {
    category: categoryId,
    ...queryParams
  } = req.query;

  let selectedProducts = products.filter(x => x.category === categoryId);
  const category = categories.find(x => x.id === categoryId);
  const categoryFilters = category.filters.map(filterId => filters.find(x => x.id === filterId));

  categoryFilters.forEach(filter => {
    switch (filter.type) {
      case 'range':
        selectedProducts = filterByRange(selectedProducts, filter, queryParams);
        break;
      case 'options':
        selectedProducts = filterByOptions(selectedProducts, filter, queryParams);
        break;

      default:
        break;
    }
  });

  res.status(200).json(selectedProducts);
}

