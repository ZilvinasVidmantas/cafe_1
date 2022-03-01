import database from '../database/index.js';

export const getCategories = (req, res) => {
  const { categories } = JSON.parse(JSON.stringify(database.data));

  res.status(200).json(categories);
}
