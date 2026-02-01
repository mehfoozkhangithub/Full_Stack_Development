import { legacy_createStore, applyMiddleware, compose } from 'redux';

import { thunk } from 'redux-thunk';

import { todoReducer } from './reducers';

/* const customMiddleware = (store) => (next) => (action) => {
  return typeof action === 'function' ? action(store.dispatch) : next(action);
}; */

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
export const myStore = legacy_createStore(
  todoReducer,
  //   applyMiddleware(customMiddleware),
  enhancer,
);
