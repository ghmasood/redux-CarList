import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  changeSearchTerm,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCar, changeSearchTerm, removeCar, changeCost, changeName };
