import { Request, Response } from "express";

import config from "../../config";
import { CarSivces } from "./cars.service";



const GetallCars = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query
        const result = await CarSivces.allcarsDb(searchTerm)
        res.status(200).json({
            status: true,
            message: "Cars retrieved successfully",
            data: result
        })

    } catch (err: any) {
        res.status(500).json({
            message: err.message || "Something went wrong",
            success: false,
            error: {
                name: err.name || "something went wrong",
                errors: err.errors,
            },
            stack: config.node_env ? err.stack : undefined,
        });
    }
}

const CreatedCars = async (req: Request, res: Response) => {
    try {
        const carsData = req.body
        const result = await CarSivces.CarsinsertonDb(carsData)
        res.status(200).json({
            success: true,
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


const getsingleCar = async (req: Request, res: Response) => {
    try {
        const { carId } = req.params
        const result = await CarSivces.getSingleCarDb(carId)
        res.status(200).json({
            status: true,
            message: "Car retrieved successfully",
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
    }

}

const UpdateSingleCar = async (req: Request, res: Response) => {
    try {
        const { carId } = req.params
        const updatedData = req.body

        const result = await CarSivces.UpdateSingleCarDb(carId, updatedData)

        res.status(200).json({
            status: true,
            message: "Car updated successfully",
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
    }
}




const DeletesingleCar = async (req: Request, res: Response) => {
    try {
        const { carId } = req.params
        await CarSivces.DeleteSingleCar(carId)
        res.status(200).json({
            status: true,
            message: "Car deleted successfully",
            data: {}
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
    }

}



export const CarsController = {
    CreatedCars,
    getsingleCar,
    GetallCars,
    UpdateSingleCar,
    DeletesingleCar
}