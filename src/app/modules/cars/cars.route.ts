import express from 'express';
import { CarsController } from './cars.controller';

const router = express.Router();

router.get('/cars', CarsController.GetallCars);
router.get('/cars/:carId', CarsController.singleCar);
router.post('/cars', CarsController.CreatedCars);
router.put('/cars/:carId', CarsController.UpdateSingleCar);


export const CarsRoute = router;
