
import { Tcars } from "./cars.interface";
import { CarsModel } from "./cars.model";


const allcarsDb = async (searchTerm: string | undefined | null | Record<never, string>) => {
    const filter = searchTerm ? {
        $or: [
            { brand: { $regex: searchTerm, $options: "i" } },
            { model: { $regex: searchTerm, $options: "i" } },
            { category: { $regex: searchTerm, $options: "i" } },
        ]
    } : {}
    const result = await CarsModel.find(filter)
    return result

}

const CarsinsertonDb = async (carsData: Tcars) => {
    const result = await CarsModel.create(carsData)
    return result

}

const getSingleCarDb = async (id: string) => {
    const result = await CarsModel.findOne({ _id: id })
    return result

}


const UpdateSingleCarDb = async (id: string, updatedData: object) => {
    const result = await CarsModel.updateOne({ _id: id }, updatedData)
    return result

}

const DeleteSingleCar = async (id: string) => {
    const result = await CarsModel.updateOne({ _id: id }, { isDeleted: true })
    return result

}



export const CarSivces = {
    CarsinsertonDb,
    getSingleCarDb,
    allcarsDb,
    UpdateSingleCarDb,
    DeleteSingleCar
}