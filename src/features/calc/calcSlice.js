import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  operation: "",
};

const calcSlice = createSlice({
  name: "calc",
  initialState,
});

export default calcSlice.reducer;
