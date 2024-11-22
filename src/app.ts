import cors from 'cors';
import express, { Application } from 'express';
import { CarsRoute } from './app/modules/cars/cars.route';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', CarsRoute)

app.use('/', (req, res) => {
  res.send('Welcome to the car API')
})

export default app;
