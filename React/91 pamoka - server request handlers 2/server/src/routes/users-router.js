import { join, dirname } from 'path';
import { Router } from 'express';
import { fileURLToPath } from 'url';
import multer from 'multer';


const __dirname = dirname(fileURLToPath(import.meta.url));
const uploadDir = join(__dirname, '../pictures');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    console.log('+++++++++++++++++++++++++++')
    console.log(req.headers);
    console.log('+++++++++++++++++++++++++++')
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage });

const router = Router();

router.post('/', upload.single('avatar'), (req, res) => {
  res.writeHead(301, {
    Location: `http://localhost:3000/`
  }).end();
});

export default router;