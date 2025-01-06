import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
  initialState: [],
  name: "apiData",
  reducers: {
    apiCall: (state, action) => {
      state.splice(0);
      state.push(...action.payload);
    },
    filterDataBySearch: (state, action) => {
      // console.log(action.payload, "this is value in filter");
      const filterData = state.filter((el) => el.title === action.payload);
      state.push(filterData);
    },
  },
});

export const { apiCall, filterDataBySearch } = ApiSlice.actions;

export default ApiSlice.reducer;
