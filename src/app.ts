import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CarsRoute } from './app/modules/cars/cars.route';
import { OrdersRoute } from './app/modules/orders/orders.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', CarsRoute);
app.use('/api', OrdersRoute);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Car API',
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Invalid Route',
  });
});

export default app;
