import database from '../database/index.js';

export const getProducts = (req, res) => {
  const users = database.data.products;
  res.status(200).json(users);
}
