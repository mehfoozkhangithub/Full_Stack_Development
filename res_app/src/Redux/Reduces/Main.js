import { combineReducers } from 'redux';
import { cartReducer } from "./Reducer";

const rooted = combineReducers({
  cartReducer,
});

export default rooted;
