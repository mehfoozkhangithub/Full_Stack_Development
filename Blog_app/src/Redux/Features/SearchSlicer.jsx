import { createSlice } from "@reduxjs/toolkit";

const SearchSlicer = createSlice({
  initialState: { value: "", flag: 0 },
  name: "searchData",
  reducers: {
    searchElement: (state, action) => {
      state.value = action.payload;
      //   state.flag++;
    },
  },
});

export const { searchElement } = SearchSlicer.actions;

export default SearchSlicer.reducer;
