import { Router } from 'express';
import { getProducts } from '../controllers/products-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';

const router = Router();

router.get('/', getProducts);

export default router;