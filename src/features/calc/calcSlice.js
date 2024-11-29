import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "mjau",
  secondNumber: "mjau",
  operation: "",
};

const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    clearState: (state) => {
      state.firstNumber = "";
      state.secondNumber = "";
    },
  },
});

export const { clearState } = calcSlice.actions;

export default calcSlice.reducer;
