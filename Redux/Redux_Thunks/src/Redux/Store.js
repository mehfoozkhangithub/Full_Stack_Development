import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from './Reducer';

export const store = createStore(Reducer, applyMiddleware(thunk));
