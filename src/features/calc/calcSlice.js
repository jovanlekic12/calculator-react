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
    deleteNumber: (state) => {
      state.firstNumber = state.firstNumber.slice(0, -1);
    },
    addNumber: (state, action) => {
      if (state.firstNumber.includes(".") && action.payload === ".") {
        return;
      } else {
        state.firstNumber = state.firstNumber + action.payload;
      }
    },
    addOperation: (state, action) => {
      if (!state.secondNumber) {
        state.secondNumber = state.firstNumber;
        state.firstNumber = "";
        state.operation = action.payload;
      } else {
      }
    },
  },
});

export const { clearState, deleteNumber, addNumber, addOperation } =
  calcSlice.actions;

export default calcSlice.reducer;
