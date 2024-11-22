
import { Tcars } from "./cars.interface";
import { CarsModel } from "./cars.model";


const CarsinsertonDb = async (carsData: Tcars) => {

    const result = await CarsModel.create(carsData)
    return result

}



export const CarSivces = {
    CarsinsertonDb
}