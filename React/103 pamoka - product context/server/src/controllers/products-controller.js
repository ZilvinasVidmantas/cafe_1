import database from '../database/index.js';

export const getProducts = (req, res) => {
  const products = database.data.products;
  res.status(200).json(products);
}
