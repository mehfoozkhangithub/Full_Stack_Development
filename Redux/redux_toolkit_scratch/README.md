## Redux- toolkit [`scratch`]

- when we create only with reducer & action so we follow the rule of the tookit like this

```js
// reducer

import { createReducer, createSlice, nanoid } from '@reduxjs/toolkit';

import * as action_type from './Action';

//! case1:  Reducer concept in the redux-tooltkit

export const Reducer = createReducer(
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
);
```

```js
//action

import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const incrementByValue = createAction('counter/incrementByValue');
export const unknow = createAction('counter/unknown');

export const randomNumber = createAction('random/number');

export const isActionWithNumberPayload = (action) => {
  console.log('🚀 ~ action:', action);
  // it's always return bool value
  return typeof action.payload === 'number';
};

//? this is action Page we only use in createReducer
```

```js
// counter with normal createReducer & createActions

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as action_type from '../Reducer/Action';

export const Counter = () => {
  const dispatch = useDispatch();

  const { value, sumOfNumberPayload, unHandleAction } = useSelector((state) => {
    console.log('🚀 ~ state:', state);
    return state;
  });
  console.log('🚀 ~ unHandleAction:', unHandleAction);
  console.log('🚀 ~ sumOfNumberPayload:', sumOfNumberPayload);

  console.log('🚀 ~ value:', value);

  return (
    <>
      <h1>Counter {value}</h1>
      <h2>Sum of payload: {sumOfNumberPayload}</h2>
      <h3>Unhandled actions: {unHandleAction}</h3>
      <button onClick={() => dispatch(action_type.increment())}>inc</button>
      <button onClick={() => dispatch(action_type.decrement())}>dec</button>
      <button onClick={() => dispatch(action_type.unknow())}>
        Dispatch Unknow Action
      </button>
      <button onClick={() => dispatch(action_type.randomNumber(10))}>
        Random Payload 10
      </button>
    </>
  );
};
```

## here we use the create slicers
