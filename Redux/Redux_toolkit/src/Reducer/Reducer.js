import { createAction, createReducer } from '@reduxjs/toolkit';

/* eslint-disable no-unused-vars */
const initialState = { value: 0, items: [], isLoading: false, isError: null };

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

export const myReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    });
});
