import express from 'express';
import remazonRouter from './remazon-prime/remazon.router';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';

const router = express.Router();

// router.get<{}, MessageResponse>('/', (req, res) => {
//   res.json({
//     message: 'API - 👋🌎🌍🌏',
//   });
// });

router.use('/emojis', emojis);
router.use('/remazon', remazonRouter);

export default router;
