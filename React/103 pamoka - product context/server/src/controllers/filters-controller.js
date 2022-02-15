import database from '../database/index.js';

export const getFilters = (req, res) => {
  let filters = database.data.filters;
  if (req.query.id) {
    const requiredFilterIds = [].concat(req.query.id);
    filters = filters.filter(x => requiredFilterIds.includes(x.id));
  }
  res.status(200).json(filters);
}

