import { createStore, applyMiddleware } from 'redux';

import { authReducer } from './auth/Reducer';
import { todoReducer } from './todos/Reducer';

const junctionOfreducer = applyMiddleware({
  auth: authReducer,
  todo: todoReducer,
});

export const ownStore = createStore(junctionOfreducer);
