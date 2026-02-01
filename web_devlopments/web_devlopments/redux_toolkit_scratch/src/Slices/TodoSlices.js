import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: [], isLoading: false, isError: false },
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const TodoSlices = todoSlice.reducer;
