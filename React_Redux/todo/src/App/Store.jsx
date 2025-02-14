import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Reducer/Reducer";

export const Store = configureStore({
  reducer: reducer,
});
