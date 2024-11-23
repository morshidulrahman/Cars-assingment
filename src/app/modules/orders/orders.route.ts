import express from 'express';
import { OrdersController } from './orders.controller';

const router = express.Router();

router.post('/orders', OrdersController.CreateOrder);
router.get('/orders/revenue', OrdersController.CalculateRevenue);

export const OrdersRoute = router;
