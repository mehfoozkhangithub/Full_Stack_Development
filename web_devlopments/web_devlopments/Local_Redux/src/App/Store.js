import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from 'redux';

import { myOwnReducer } from '../Reducer/Counts/Reducer';
import { authReducer } from '../Reducer/Auth/Reducer';
import { todoReducer } from '../Reducer/Todos/Reducer';

const terminalReducer = combineReducers({
  todos: todoReducer,
  counts: myOwnReducer,
  auths: authReducer,
});

const logger = (store) => (next) => (action) => {
  return typeof action === 'function'
    ? action(store.dispatch, store.getStore)
    : next(action);
};

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhance = composeEnhancers(applyMiddleware(logger));

export const myOwnStore = legacy_createStore(terminalReducer, enhance);

// redok created by sirru
