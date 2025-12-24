/* eslint-disable no-unused-vars */
import { createReducer, createSlice, nanoid } from '@reduxjs/toolkit';

import * as action_type from './Action';

//! case1:  Reducer concept in the redux-tooltkit

/* export const Reducer = createReducer(
  { value: 0, sumOfNumberPayload: 0, unHandleAction: 0 },
  (builder) => {
    builder
      .addCase(action_type.increment, (state, action) => {
        console.log('🚀 ~ action:', action);
        state.value++;
        // state.value += action.payload;
      })
      .addCase(action_type.decrement, (state, action) => {
        state.value--;
        // state.value -= action.payload;
      })
      .addMatcher(action_type.isActionWithNumberPayload, (state, action) => {
        state.sumOfNumberPayload += action.payload;
      })
      .addDefaultCase((state, action) => {
        state.unHandleAction += 1;
      });
  }
); */

//# case2: normal Reducer concept in the redux-tooltkit

export const Reducer = createSlice({
  name: 'count',
  initialState: { value: 0, sumOfNumberPayload: 0, unHandleAction: 0 },
  //$ this is without `creator callback` notation
  //   reducers: {
  //     countIncre: (state, action) => {
  //       state.value += action.payload;
  //     },
  //     countDecr: {
  //       reducer: (state, action) => {
  //         state.value -= action.payload;
  //       },
  //       prepare: (text) => {
  //         return { payload: text };
  //       },
  //     },
  //   },

  //& this is with `creator callback` notation

  reducers: (create) => ({
    countIncre: create.reducer((state, action) => {
      state.value += action.payload;
    }),

    countDecr: create.preparedReducer(
      // this is prepared callback
      (text) => {
        return { payload: text };
      },
      //   this is reducer paramiter
      (state, action) => {
        state.value -= action.payload;
      }
    ),
  }),
});

export const { countIncre, countDecr } = Reducer.actions;

export const myReducer = Reducer.reducer;

/* 

(builder) => {
    builder
      .addCase(action_type.increment, (state, action) => {
        console.log('🚀 ~ action:', action);
        state.value += action.payload;
      })
      .addCase(action_type.decrement, (state, action) => {
        state.value -= action.payload;
      })
      .addMatcher(action_type.isActionWithNumberPayload, (state, action) => {
        state.sumOfNumberPayload += action.payload;
      })
      .addDefaultCase((state, action) => {
        state.unHandleAction += 1;
      });
  },

*/
