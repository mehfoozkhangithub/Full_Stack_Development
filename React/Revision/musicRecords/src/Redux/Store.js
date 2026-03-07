import {
  applyMiddleware,
  compose,
  legacy_createStore,
  combineReducers,
} from 'redux';
import { thunk } from 'redux-thunk';

import { Reducer as AppReducer } from './App/Reducer';
import { Reducer as AuthReducer } from './Auth/Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ AuthReducer, AppReducer });

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
