import { combineReducers } from "redux";
import apiSlice from "../Features/FetchSlice";
import todoSlicer from "../Features/TodosSlices";

export const ReducerCombine = combineReducers({
  api: apiSlice,
  todo: todoSlicer,
});
