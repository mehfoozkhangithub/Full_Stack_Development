/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    addCount: {
      reducer: (state, action) => {
        state.count++;
      },
    },
    subCount: (state, action) => {
      state.count--;
    },
    inc_extraBy_10_Count: {
      reducer: (state, action) => {
        state.count += action.payload;
      },
      prepare(value) {
        console.log('🚀 ~ value:', value);
        return { payload: value };
      },
    },
    dec_extraBy_10_Count: {
      reducer: (state, action) => {
        state.count -= action.payload;
      },
      prepare(value) {
        console.log('🚀 ~ value:', value);
        return { payload: value };
      },
    },
  },

  selectors: {
    count: (state) => state.count,
    isEvenCount: (state) => state.count % 2 === 0,
  },
});

export const {
  addCount,
  subCount,
  inc_extraBy_10_Count,
  dec_extraBy_10_Count,
} = CounterSlice.actions;

const count = (state) => CounterSlice.selectors.count(state);
const isEvenCount = (state) => CounterSlice.selectors.isEvenCount(state);

export { count, isEvenCount };

/* 🔥 THIS IS THE KEY PART */
/* export const { count, isEvenCount } = CounterSlice.getSelectors(
  (state) => state.counter // 👈 tell RTK where the slice lives
);
 */
export const CounterSlices = CounterSlice.reducer;
