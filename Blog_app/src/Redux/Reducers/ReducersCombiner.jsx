import { combineReducers } from "redux";
import ApiSlice from "../Features/ApiSlice";
import searchSlicer from "../Features/SearchSlicer";

export const ReducersCombiner = combineReducers({
  fetchData: ApiSlice,
  searchData: searchSlicer,
});
