import database from '../database/index.js';

export const getFilters = (req, res) => {
  const users = database.data.filters;
  res.status(200).json(users);
}

