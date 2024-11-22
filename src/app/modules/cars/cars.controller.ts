import { Request, Response } from "express";
import { CarsModel } from "./cars.model";
import config from "../../config";



const CreatedCars = async (req: Request, res: Response) => {
    try {
        const { cars: carsData } = req.body
        const result = await CarsModel.create(carsData)
        res.status(200).json({
            status: true,
            message: "Car created successfully",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            message: err.message || "something went wrong",
            success: false,
            error: {
                name: err.name || "something went wrong",
                errors: err.errors,
            },
            stack: config.node_env ? err.stack : undefined,
        });
    };


}


export const CarsController = {
    CreatedCars

}