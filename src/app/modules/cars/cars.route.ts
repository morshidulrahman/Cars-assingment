import express from 'express';
import { CarsController } from './cars.controller';

const router = express.Router();

router.get('/cars', CarsController.GetallCars);
router.get('/cars/:carId', CarsController.getsingleCar);
router.post('/cars', CarsController.CreatedCars);
router.put('/cars/:carId', CarsController.UpdateSingleCar);
router.delete('/cars/:carId', CarsController.DeletesingleCar);


export const CarsRoute = router;
