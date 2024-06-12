import * as React from "react";

type Props = {
  car: ICar;
};

const Car: React.FC<Props> = ({ car }) => {
  return (
    <div>
        <h1>{car.manufacture} - {car.model}</h1>
        <span>Plate : {car.plate}</span>
    </div>
  );
};

export default Car;