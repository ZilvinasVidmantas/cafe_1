import database from '../database/index.js';

export const getCategories = (req, res) => {
  const { categories } = JSON.parse(JSON.stringify(database.data));

  res.status(200).json(categories);
}


export const getCategory = (req, res) => {
  const { categoryId } = req.params;
  const { categories } = JSON.parse(JSON.stringify(database.data));

  const category = categories.find(x => x.id === categoryId);

  res.status(200).json(category);
}
