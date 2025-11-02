import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { authReducer } from './auth/Reducer';
import { todoReducer } from './app/Reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  app: todoReducer,
});

const logger = (state) => (next) => (action) => {
  console.log('dispatch action frm logger', action, next, state);
  let val = next(action);
  console.log('exitting looger');
  return val;
};

const logger2 = (state) => (next) => (action) => {
  console.log('dispatch action frm logger', action, next, state);
  let val = next(action);
  console.log('exitting looger');
  return val;
};

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhance = composeEnhancers(applyMiddleware(logger, logger2));

export const myStore = legacy_createStore(rootReducer, enhance);
