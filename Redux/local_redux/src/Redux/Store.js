import { createStore, combineReducers } from 'redux';

import { todosReducer } from './todos/Reducer';
import { authReducer } from './auth/reducer';

const rootTerminal = combineReducers({
  auth: authReducer,
  todo: todosReducer,
});

export const myStore = createStore(rootTerminal);
