

import { Torders } from "./orders.interface";
import { OrdersModel } from "./orders.model";



const saveOrderinDb = async (orderData: Torders, carsData) => {
    carsData.quantity = carsData.quantity - orderData.quantity
    if (carsData.quantity === 0) {
        carsData.inStock = false
    }
    carsData.save()
    const result = await OrdersModel.create(orderData)
    return result
}


const TotalRevuneInDb = () => {
    const result = OrdersModel.aggregate(
        [
            {
                $group: {
                    _id: null, totalAmount: { $sum: { $multiply: ["$totalPrice", "$quantity"] } },
                }
            }
        ]
    )

    return result
}

export const OrderService = {
    saveOrderinDb,
    TotalRevuneInDb
}