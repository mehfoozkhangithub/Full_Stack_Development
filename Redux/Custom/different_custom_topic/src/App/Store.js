import { configureStore } from '@reduxjs/toolkit';
import todoReducers from '../Reducer/TodoSlice';

export const myStores = configureStore({
  reducer: {
    todos: todoReducers,
  },
});
