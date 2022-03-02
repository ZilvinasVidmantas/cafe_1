import database from '../database/index.js';

export const getFilters = (req, res) => {
  const DB = JSON.parse(JSON.stringify(database.data));

  let { filters } = DB;
  const category = DB.categories.find(x => x.id === req.query.category);

  if (!category) {
    res.status(200).json(filters);
    return;
  }

  if (category.filters) {
    filters = filters
      .filter(x => category.filters.includes(x.id))
      .map((filter) => {
        switch (filter.type) {
          case 'autocomplete':
          case 'options':
            filter.options = DB[filter.collection].sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'range':
            let products = DB.products;
            if (category && category.id) products = products.filter(x => x.category === category.id);
            filter.min = 0;
            filter.max = 0;
            if (products.length > 0) {
              products.sort((a, b) => a[filter.name] - b[filter.name]);
              filter.min = Math.floor(products[0][filter.name]);
              filter.max = Math.ceil(products[products.length - 1][filter.name]);
            }
            break;
        }
        return filter;
      });

    res.status(200).json(filters);
  } else {
    res.status(200).json([]);
  }
}

