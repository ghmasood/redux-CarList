import React from "react";
import { useAppSelector } from "../../store/hooks";

function CarValue() {
  const totalValue = useAppSelector((store) =>
    store.cars.carsList
      .filter((c) =>
        c.name.toLowerCase().includes(store.cars.searchTerm.toLowerCase())
      )
      .reduce((acc, c) => acc + c.cost, 0)
  );
  return (
    <div className="flex w-full justify-end">
      <span className="text-sky-900 text-2xl font-medium">
        Total Value:{" "}
        <span className="font-semibold">${totalValue.toLocaleString()}</span>
      </span>
    </div>
  );
}

export default CarValue;
