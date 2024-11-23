import { model, Schema } from 'mongoose';
import { Tcars } from './cars.interface';

const CarsSchema = new Schema<Tcars>(
  {
    brand: {
      type: String,
      required: [true, 'brand is required'],
    },
    model: {
      type: String,
      required: [true, 'model is required'],
    },
    year: {
      type: Number,
      required: [true, 'year is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: [true, 'category is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      min: [0, 'quantity must be a positive number'],
    },
    inStock: Boolean,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }

);

CarsSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

CarsSchema.pre('findOne', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const CarsModel = model('cars', CarsSchema);
