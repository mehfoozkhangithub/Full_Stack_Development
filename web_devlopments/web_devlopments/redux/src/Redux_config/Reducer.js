/* eslint-disable no-unused-vars */
import { createAction, createReducer } from '@reduxjs/toolkit';

import { fetchUserById } from '../Redux_config/Thunks';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const incrementByAmount = createAction('counter/incrementByAmount');
export const decrementByAmount = createAction('counter/decrementByAmount');

const initialState = { value: 0, item: [], isLoading: false, isError: false };

const rootReducer = createReducer(initialState, (para) => {
  para
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addCase(decrementByAmount, (state, action) => {
      state.value -= action.payload;
    });

  para.addAsyncThunk(fetchUserById, {
    pending: (state) => {
      state.isLoading = 'pending';
      state.isError = null;
    },
    fulfilled: (state, action) => {
      state.item = action.payload;
    },
    rejected: (state, action) => {
      state.isError = action.error;
    },
    settled: (state, action) => {
      state.isLoading = action.meta.requestStatus;
    },
  });
});

export default rootReducer;
