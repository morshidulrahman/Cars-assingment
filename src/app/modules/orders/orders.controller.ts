/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderService } from './orders.service';
import config from '../../config';
import { CarsModel } from '../cars/cars.model';

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const carsData = await CarsModel.findById({ _id: orderData.car });

    if (!carsData) {
      return res.status(404).json({
        message: 'Car not found',
        status: false,
      });
    }

    if (orderData.quantity > carsData.quantity) {
      return res.status(404).json({
        message: carsData.inStock
          ? `Car not enough quantity.Only ${carsData.quantity} items available`
          : 'insufficient stock',
        status: false,
      });
    }

    const result = await OrderService.saveOrderinDb(orderData, carsData);

    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: err.message || 'something went wrong',
      success: false,
      error: {
        name: err.name || 'something went wrong',
        errors: err.errors,
      },
      stack: config.node_env ? err.stack : undefined,
    });
  }
};

const CalculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.TotalRevuneInDb();
    const totalRevenue = result[0].totalAmount;
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message || 'something went wrong',
      success: false,
      error: {
        name: err.name || 'something went wrong',
        errors: err.errors,
      },
      stack: config.node_env ? err.stack : undefined,
    });
  }
};

export const OrdersController = {
  CreateOrder,
  CalculateRevenue,
};
