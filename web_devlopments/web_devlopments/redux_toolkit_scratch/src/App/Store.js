import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { CounterSlices } from '../Slices/CounterSlices';
import { TodoSlices } from '../Slices/TodoSlices';

const rootSlices = combineSlices({
  counter: CounterSlices,
  todos: TodoSlices,
});

export const myStore = configureStore({
  reducer: rootSlices,
});
