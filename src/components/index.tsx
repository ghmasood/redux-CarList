import React from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";
import CarSearch from "./CarSearch";
import CarValue from "./CarValue";

function CarApp() {
  return (
    <div className="flex absolute flex-col bg-sky-200 max-w-3xl w-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4 rounded-2xl shadow-lg">
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default CarApp;
