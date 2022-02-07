import { Router } from 'express';
import { updateImage } from '../controllers/profile-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const { originalname} = file;
    const ext = originalname.slice(originalname.indexOf('.'));
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
})

const uploadMiddleware = multer({ storage });

const router = Router();

router.put('/img', authMiddleware, uploadMiddleware.single('img'), updateImage);

export default router;