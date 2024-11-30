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
      state.operation = "";
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
      if (!state.firstNumber && !state.secondNumber) {
        return;
      } else if (state.secondNumber && !state.firstNumber) {
        state.operation = action.payload;
      } else if (!state.secondNumber) {
        state.secondNumber = state.firstNumber;
        state.firstNumber = "";
        state.operation = action.payload;
      }
    },
    calculate: (state, action) => {
      switch (state.operation) {
        case "/":
          state.secondNumber = parseFloat(
            Number(state.secondNumber) / Number(state.firstNumber)
          );
          break;
        case "*":
          state.secondNumber = parseFloat(
            Number(state.secondNumber) * Number(state.firstNumber)
          );
          break;
        case "+":
          state.secondNumber = parseFloat(
            Number(state.secondNumber) + Number(state.firstNumber)
          );
          break;
        case "-":
          state.secondNumber = parseFloat(
            Number(state.secondNumber) - Number(state.firstNumber)
          );
      }
      state.firstNumber = "";
      state.operation = action.payload;
    },
  },
});

export const { clearState, deleteNumber, addNumber, addOperation, calculate } =
  calcSlice.actions;

export default calcSlice.reducer;
