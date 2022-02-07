import database from '../database/index.js';

export const updateImage = (req, res) => {
  const user = database.data.users.find(x => x.email === req.user.email);
  const imgSrc = `${process.env.DOMAIN}:${process.env.SERVER_PORT}/images/${req.file.filename}`;
  user.imgSrc = imgSrc;
  database.write();
  res.status(200).json({ message: 'Image uploaded', imgSrc });
}
