import { Router } from 'express';
import { getCollections } from '../controllers/collections-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';

const router = Router();

router.get('/', authMiddleware, adminMiddleware, getCollections);

export default router;