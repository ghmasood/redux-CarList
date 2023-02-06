import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { name: "", cost: 0 },
  reducers: {
    changeName(state, action: { type: string; payload: string }) {
      state.name = action.payload;
    },
    changeCost(state, action: { type: string; payload: number }) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
