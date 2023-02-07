import React from "react";
import { removeCar } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function CarList() {
  const { AllCars, input } = useAppSelector((store) => {
    const filterdCar = store.cars.carsList.filter((c) =>
      c.name.toLowerCase().includes(store.cars.searchTerm.toLowerCase())
    );
    return {
      AllCars: filterdCar,
      input: store.form.name,
    };
  });
  const dispatch = useAppDispatch();
  const handleCarDelete = (id: string) => {
    dispatch(removeCar(id));
  };
  return (
    <div className="z-20 w-full flex flex-col gap-2 max-h-60 overflow-scroll">
      {AllCars.length > 0 ? (
        AllCars.map((c) => {
          const isBold =
            input && c.name.toLowerCase().includes(input.toLowerCase());
          return (
            <div
              key={c.id}
              className="flex px-2 py-1.5  items-center bg-sky-50 shadow-lg justify-between rounded-lg"
            >
              <span
                className={`text-2xl ${
                  isBold ? "font-semibold" : "font-normal"
                } basis-1/3`}
              >
                {c.name}
              </span>
              <span className="text-2xl font-light basis-1/3">
                ${c.cost.toLocaleString()}
              </span>
              <button
                onClick={() => {
                  handleCarDelete(c.id);
                }}
                type="submit"
                className="bg-transparent text-sky-800 border-sky-800 border hover:bg-sky-800 hover:text-white duration-300 px-4 rounded-lg h-8 basis-1/6"
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <span className="mx-auto italic text-sky-900">No any car!</span>
      )}
    </div>
  );
}

export default CarList;
