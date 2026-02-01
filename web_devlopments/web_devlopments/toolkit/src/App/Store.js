import { configureStore } from '@reduxjs/toolkit';
import { ownReducer } from './../Reducer/Reducer';

export const myStore = configureStore({
  reducer: {
    todo: ownReducer.todos,
    count: ownReducer.counter,
    // fetch:
  },
});
