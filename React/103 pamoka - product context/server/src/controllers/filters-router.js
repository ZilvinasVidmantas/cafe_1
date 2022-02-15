import database from '../database/index.js';

export const getUsers = (req, res) => {
  const users = database.data.filters;
  res.status(200).json(users);
}

