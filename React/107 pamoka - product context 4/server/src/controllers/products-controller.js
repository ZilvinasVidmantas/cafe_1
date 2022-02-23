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
    if (filter.type === 'range') {
      selectedProducts = filterByRange(selectedProducts, filter, queryParams);
    }
  });

  res.status(200).json(selectedProducts);
}

