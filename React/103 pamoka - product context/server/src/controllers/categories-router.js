import database from '../database/index.js';

export const getCategories = (req, res) => {
  const users = database.data.categories;
  res.status(200).json(users);
}
