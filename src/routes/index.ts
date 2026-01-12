import { Router } from 'express';
import aboutRoutes from '../modules/about/about.routes.js';
import authRoutes from '../modules/auth/auth.routes.js';
import govRoutes from '../modules/government/gov.routes.js';

import healthRoutes from './v1/health.js';

const router = Router();

// /api health check
router.use('/', healthRoutes);

// /api/v1/about : subroutes
router.use('/v1/about', aboutRoutes);
router.use('/v1/auth', authRoutes);
router.use('/v1/gov', govRoutes);

// /api/v1/about root
router.get('/v1/about', (_, res) => res.json({ message: 'About API root.' }));
// /api/v1/auth root
router.get('/v1/auth', (_, res) => res.json({ message: 'Auth API root.' }));
// /api/v1/gov root
router.get('/v1/gov', (_, res) => res.json({ message: 'Gov API root.' }));

// /api/v1 root
router.get('/v1', (_, res) => res.json({ message: 'API v1 root.' }));

router.use((req, res) =>
  res.status(404).json({ error: 'Not found', path: req.originalUrl }),
);
export default router;
