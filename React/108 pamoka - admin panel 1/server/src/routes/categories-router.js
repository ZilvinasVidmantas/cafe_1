import { Router } from 'express';
import { getCategories } from '../controllers/categories-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';

const router = Router();

router.get('/', getCategories);

export default router;