import database from '../database/index.js';

export const getProducts = (req, res) => {
  const {
    category: categoryId,
  } = req.query;

  const products = database.data.products.filter(x => x.category === categoryId);

  // const category = database.categories.find(x => x.id === categoryId);
  res.status(200).json(products);
}
