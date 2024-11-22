import { model, Schema } from "mongoose"
import { Torders } from "./orders.interface"


const OrdersSchema = new Schema<Torders>({
    email: {
        type: String,
        required: [true, 'email is required']
    },
    car: {
        type: String,
        required: [true, 'car is required']
    },
    quantity: {
        type: Number,
        required: [true, 'price is required'],
        min: [0, 'quantity must be a positive number'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'price is required'],
        min: [0, 'totalPrice must be a positive number'],
    }
}, { timestamps: true })



export const OrdersModel = model('orders', OrdersSchema)