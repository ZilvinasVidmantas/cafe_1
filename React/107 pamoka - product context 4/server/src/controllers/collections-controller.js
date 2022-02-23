import database from '../database/index.js';

export const getCollections = (req, res) => {
  const collections = database.data.collections.map(collection => ({
    ...collection,
    data: database.data[collection.title],
  }));
  res.status(200).json(collections);
}