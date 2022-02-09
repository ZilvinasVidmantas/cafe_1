import database from '../database/index.js';
import UserViewModel from '../view-models/user-view-model.js';
import { removeFile } from '../helpers/file-helpers.js';
import { createToken } from '../helpers/token-helpers.js';

export const updateImage = (req, res) => {
  const user = database.data.users.find(x => x.email === req.user.email);
  const { SERVER_DOMAIN, SERVER_PORT, IMG_PATH } = process.env;
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

export const updateProfile = (req, res) => {
  const { name, surname, email } = req.body;

  const foundUser = database.data.users.find(x => x.email === req.user.email);

  let token;
  if (name && name !== foundUser.name) foundUser.name = name;
  if (surname && surname !== foundUser.surname) foundUser.surname = surname;
  if (email && email !== foundUser.email) {
    foundUser.email = email;
    token = createToken({ email, role: foundUser.role })
  }
  database.write();

  const responseJson = {
    message: 'Profile updated',
    user: new UserViewModel(foundUser),
  }

  if (token) responseJson.token = token;

  res.status(200).json(responseJson);
}
