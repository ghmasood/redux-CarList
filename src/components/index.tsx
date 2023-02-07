import React from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";
import CarSearch from "./CarSearch";
import CarValue from "./CarValue";
import CopyRight from "./copyRight";

function CarApp() {
  return (
    <div className="gap-4 flex absolute flex-col bg-sky-200 max-w-3xl w-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4 rounded-2xl shadow-lg">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
      <CopyRight />
    </div>
  );
}

export default CarApp;
