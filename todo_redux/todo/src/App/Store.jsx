import { configureStore } from "@reduxjs/toolkit";
import { counterSlices } from "../Features/todoSlices";

export const store = configureStore({
  reducer: {
    counter: counterSlices,
  },
});
