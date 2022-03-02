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

export const updateCategory = (req, res) => {
  const { categoryId } = req.params;
  const categoryIndex = database.data.categories.findIndex(x => x.id === categoryId);
  if (categoryIndex === -1) {
    res.status(404).json({ message: `Category with id '${categoryId}' was not found.` });
    return;
  }

  database.data.categories[categoryIndex] = { ...database.data.categories[categoryIndex], ...req.body };
  database.write();

  res.status(200).json(database.data.categories[categoryIndex]);
}
