import database from '../database/index.js';
import UserViewModel from '../view-models/user-view-model.js';
import { removeFile } from '../helpers/file-helpers.js';

export const updateImage = (req, res) => {
  const user = database.data.users.find(x => x.email === req.user.email);
  const { SERVER_DOMAIN, SERVER_PORT, IMG_PATH} = process.env;
  const imgSrc = `/${IMG_PATH}/${req.file.filename}`;
  if (user.imgSrc) {
    removeFile(user.imgSrc);
  }
  user.imgSrc = imgSrc;
  database.write();

  res.status(200).json({
    message: 'Image uploaded',
    user: new UserViewModel(user),
  });
}
