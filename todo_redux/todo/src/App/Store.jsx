import { configureStore } from "@reduxjs/toolkit";
import { ReducerCombine } from "../Reducers/ReducerCombine";

export const store = configureStore({
  reducer: ReducerCombine,
});
