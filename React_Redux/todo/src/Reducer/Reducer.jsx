import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
const Reducer = createSlice({
  initialState,
  name: "api",
  reducers: {
    apiFetch: (state, action) => {},
  },
});

export const { apiFetch } = Reducer.actions;

export default Reducer.reducer;
