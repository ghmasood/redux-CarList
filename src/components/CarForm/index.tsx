import React from "react";
import { useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function CarForm() {
  const formData = useAppSelector((store) => {
    return store.form;
  });
  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCost(Number(e.target.value)));
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addCar({ name: formData.name, cost: formData.cost }));
  };
  return (
    <form className="flex w-full justify-between" onSubmit={handleOnSubmit}>
      <div className="flex items-center gap-2">
        <label
          className="text-xl font-semibold text-sky-900 select-none"
          htmlFor="carName"
        >
          Car Name
        </label>
        <input
          id="carName"
          type={"text"}
          className="rounded-lg h-10 px-2 font-extralight shadow-sm bg-sky-50"
          onChange={handleNameChange}
          value={formData.name}
        />
      </div>
      <div className="flex items-center gap-2">
        <label
          className="text-xl font-semibold text-sky-900 select-none"
          htmlFor="carValue"
        >
          Car Value
        </label>
        <input
          id="carValue"
          type={"number"}
          className="rounded-lg h-10 px-2 font-extralight shadow-sm bg-sky-50"
          onChange={handleCostChange}
          value={formData.cost || ""}
        />
      </div>
      <button
        type="submit"
        className="bg-sky-800 hover:bg-sky-700 duration-300 text-white px-12 rounded-lg h-10"
      >
        Submit
      </button>
    </form>
  );
}

export default CarForm;
