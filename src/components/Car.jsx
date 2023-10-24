import React from "react";
import { useParams } from "react-router-dom";
import data from "../components/data.json";

const Car = () => {
  const { id } = useParams();
  const selectedCar = data.find((item) => item.id === parseInt(id, 10));
  return (
    <>
      <h3>{selectedCar.CarMake}</h3>
      <h3>{selectedCar.carModel}</h3>
      <h3>{selectedCar.CarYear}</h3>
    </>
  );
};

export default Car;
