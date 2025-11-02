import { configureStore } from "@reduxjs/toolkit";
import logicReducer from "../Reducer/Reducer";

export const Store = configureStore({
  reducer: { todo: logicReducer },
});
