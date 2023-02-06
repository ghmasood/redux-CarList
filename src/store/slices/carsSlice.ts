import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [] as { id: string; name: string; cost: number }[],
  },
  reducers: {
    changeSearchTerm(state, action: { type: string; payload: string }) {
      state.searchTerm = action.payload;
    },
    addCar(
      state,
      action: { type: string; payload: { name: string; cost: number } }
    ) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action: { type: string; payload: string }) {
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
