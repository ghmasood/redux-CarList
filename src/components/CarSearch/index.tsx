import React from "react";
import { changeSearchTerm } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function CarSearch() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((store) => store.cars.searchTerm);
  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="flex justify-between items-center w-full">
      <span className="text-3xl font-semibold text-sky-900 select-none">
        My Cars
      </span>
      <div className="flex items-center gap-2">
        <label
          className="text-xl font-medium text-sky-900 select-none"
          htmlFor="search"
        >
          Search:
        </label>
        <input
          id="search"
          type={"text"}
          className=" rounded-lg h-10 px-2 font-extralight shadow-sm bg-sky-50"
          value={searchTerm}
          onChange={searchOnChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
