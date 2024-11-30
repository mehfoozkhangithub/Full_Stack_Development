import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/TodosSlices";
export const store = configureStore({
  reducer: todoSlice,
});
