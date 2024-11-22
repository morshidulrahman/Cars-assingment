import express from 'express';
import { CarsController } from './cars.controller';

const router = express.Router();

router.post('/cars', CarsController.CreatedCars);


export const CarsRoute = router;
