import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: "",
  secondNumber: "",
  operation: "",
};

const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers,
});

export default calcSlice.reducer;
