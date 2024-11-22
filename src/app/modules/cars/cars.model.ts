import { model, Schema } from "mongoose";
import { Tcars } from "./cars.interface";


const CarsSchema = new Schema<Tcars>({
    brand: {
        type: String,
        required: [true, 'brand is required']
    },
    model: {
        type: String,
        required: [true, 'model is required']
    },
    year: {
        type: Number,
        required: [true, 'year is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    category: {
        type: String,
        enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        required: [true, 'category is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    quantity: {
        type: Number,
        required: [true, 'quantity is required']
    },
    inStock: Boolean,

}, { timestamps: true });


export const CarsModel = model('cars', CarsSchema)