import { Router } from 'express';
import { updateImage } from '../controllers/profile-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import imgUploadMiddleware from '../middlewares/img-upload-middleware.js';

const router = Router();

router.put('/img', authMiddleware, imgUploadMiddleware.single('img'), updateImage);

export default router;