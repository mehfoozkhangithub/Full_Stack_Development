import { configure } from "@reduxjs/toolkit";
import reducer from "../Reducer/Reducer";

const Store = configure({
  reducer: reducer,
});
