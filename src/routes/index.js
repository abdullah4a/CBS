// export all routes
import { Router } from 'express';
import healthRoute from './health.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use(healthRoute);

export default router;