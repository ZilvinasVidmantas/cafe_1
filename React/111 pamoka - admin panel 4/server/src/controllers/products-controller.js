import database from '../database/index.js';

const filterByRange = (products, filter, queryParams) => {
  const min = Number(queryParams[`${filter.name}_min`]);
  const max = Number(queryParams[`${filter.name}_max`]);

  if (min) {
    products = products.filter(x => x[filter.name] >= min);
  }
  if (max) {
    products = products.filter(x => x[filter.name] <= max);
  }

  return products;
};

const filterByOptionsOrAutocomplete = (products, filter, queryParams) => {
  const options = [].concat(queryParams[filter.name]).filter(x => x !== undefined);
  if (options.length > 0) {
    products = products.filter(x => options.includes(x[filter.name]));
  }
  return products;
};

const filterFuctionMap = {
  range: filterByRange,
  options: filterByOptionsOrAutocomplete,
  autocomplete: filterByOptionsOrAutocomplete,
};

const mapWithFilterCollection = (products, filter, collections) => {
  const collection = collections[filter.collection];
  products = products.map(product => ({
    ...product,
    [filter.name]: collection.find(x => x.id === product[filter.name]).title,
  }));
  return products
}

export const getProducts = (req, res) => {
  const DB = JSON.parse(JSON.stringify(database.data));

  const { products, categories, filters } = DB;
  const {
    category: categoryId,
    ...queryParams
  } = req.query;

  let selectedProducts = products
    .filter(x => x.category === categoryId)
    .map(({ category, ...product }) => product);
  const category = categories.find(x => x.id === categoryId);
  const categoryFilters = category.filters.map(filterId => filters.find(x => x.id === filterId));

  categoryFilters.forEach(filter => {
    selectedProducts = filterFuctionMap[filter.type](selectedProducts, filter, queryParams);
    if (filter.collection) {
      selectedProducts = mapWithFilterCollection(selectedProducts, filter, DB);
    }
  });

  res.status(200).json(selectedProducts);
}

