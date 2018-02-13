import express, { Router } from 'express';

import { index } from './controllers/cartData';

const router = Router();

router.route('/cartData.json')
    .get(index);


export default router;