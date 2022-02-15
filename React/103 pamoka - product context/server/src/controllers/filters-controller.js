import database from '../database/index.js';

export const getFilters = (req, res) => {
  let filters = database.data.filters;
  const category = database.data.categories.find(x => x.id === req.query.category);
  if (category && category.filters) {
    filters = filters.filter(x => category.filters.includes(x.id));
  }

  filters = filters.map((filter) => {
    switch (filter.type) {
      case 'autocomplete':
      case 'options':
        filter.options = database.data[filter.collection];
        break;
      case 'range':
        let products = database.data.products;
        if (category && category.id) products = products.filter(x => x.category === category.id);
        products.sort((a, b) => a[filter.property] - b[filter.property]);
        filter.min = products[0][filter.property] ?? 0;
        filter.max = products[products.length - 1][filter.property] ?? 0;
        break;
    }
    return filter;
  });
  res.status(200).json(filters);
}

