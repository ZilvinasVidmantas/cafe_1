import { Router } from 'express';
import { updateImage } from '../controllers/profile-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import multer from 'multer';

const uploadMiddleware = multer({ dest: 'uploads/' });

const router = Router();

router.put('/img', authMiddleware, uploadMiddleware.single('img'), updateImage);

export default router;