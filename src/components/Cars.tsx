import React, { useContext } from "react";
import { CarContext } from "../context/carContext";
import Car from "./Car";

const Cars: React.FC = () => {
    const cars : any = useContext(CarContext);
    return (
        <>
        {cars.map((car: any) => (
            <div>
                <Car key={car.id} car={car}/>
            </div>
        ))}
      </>
    )
}

export default Cars;