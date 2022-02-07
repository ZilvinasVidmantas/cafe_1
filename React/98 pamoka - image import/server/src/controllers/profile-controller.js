import database from '../database/index.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const rootDirPath = filePath.slice(0, filePath.indexOf('src'));

export const updateImage = (req, res) => {
  const user = database.data.users.find(x => x.email === req.user.email);
  const { SERVER_DOMAIN, SERVER_PORT, IMG_PATH, PUBLIC_PATH } = process.env;
  const imgSrc = `${SERVER_DOMAIN}:${SERVER_PORT}${IMG_PATH}${req.file.filename}`;
  if (user.imgSrc) {
    const imgPathRelative = user.imgSrc.slice(user.imgSrc.indexOf(IMG_PATH));
    const fullPath = path.join(rootDirPath, PUBLIC_PATH, imgPathRelative);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath)
    }
  }
  user.imgSrc = imgSrc;
  database.write();
  res.status(200).json({ message: 'Image uploaded', imgSrc });
}
