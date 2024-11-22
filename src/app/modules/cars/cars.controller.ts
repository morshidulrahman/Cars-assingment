import { Request, Response } from "express";
import { CarsModel } from "./cars.model";



const CreatedCars = async (req: Request, res: Response) => {

    try {
        const { cars: carsData } = req.body
        const result = await CarsModel.create(carsData)
        res.status(200).json({
            status: true,
            message: "Car created successfully",
            data: result
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Failed to create car",
            error: err
        })
    }

}





export const CarsController = {
    CreatedCars

}