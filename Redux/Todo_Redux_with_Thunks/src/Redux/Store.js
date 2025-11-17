import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { authReducer } from './auth/Reducer';
import { todoReducer } from './todos/Reducer';

const junctionOfreducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

// redux devtool and middleware(thunks)

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const ownStore = createStore(junctionOfreducer, enhancer);
