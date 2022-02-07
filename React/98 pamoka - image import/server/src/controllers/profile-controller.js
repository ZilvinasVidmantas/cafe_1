import database from '../database/index.js';


export const updateImage = (req, res) => {
  console.log(req.file);
  console.log('Gauta užklausa');
  res.status(200).json({ message: 'O tai tau!' });
}
