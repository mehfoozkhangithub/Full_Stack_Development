import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [];
const fetchSlice = createSlice({
  initialState,
  name: "api",
  reducers: {
    dataFetch: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { dataFetch } = fetchSlice.actions;

export default fetchSlice.reducer;
