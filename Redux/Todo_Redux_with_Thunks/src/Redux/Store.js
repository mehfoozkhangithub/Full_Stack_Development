import { createStore, combineReducers } from 'redux';

import { authReducer } from './auth/Reducer';
import { todoReducer } from './todos/Reducer';

const junctionOfreducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export const ownStore = createStore(junctionOfreducer);
