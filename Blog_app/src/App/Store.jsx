import { configureStore } from "@reduxjs/toolkit";
import { ReducersCombiner } from "./../Redux/Reducers/ReducersCombiner";

export const store = configureStore({
  reducer: ReducersCombiner,
});
