// export all routes
import { Router } from 'express';
import healthRoute from './health.js';

const router = Router();
router.use(healthRoute);

export default router;