import React from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";
import CarSearch from "./CarSearch";
import CarValue from "./CarValue";

function CarApp() {
  return (
    <div className="flex flex-col w-full">
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default CarApp;
