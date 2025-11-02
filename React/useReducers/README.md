```jsx
// action page code

export const Increments = { type: 'INCREMENT' };
export const Decrements = { type: 'DECREMENT' };
export const Reset = { type: 'RESET' };

// here we are dynamically pass the value in reducer function while getting the value form user.

export const incrementByValue = (value) => {
  return {
    type: 'IncrementByValue',
    payload: value,
  };
};
export const decrementByValue = (value) => {
  return {
    type: 'decrementByValue',
    payload: value,
  };
};
// hello world js
```

```js
// reducer code

export const Reducers = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };

    case 'RESET':
      return { count: 0 };

    case 'IncrementByValue':
      return { count: state.count + action.payload };

    case 'decrementByValue':
      return { count: state.count - action.payload };

    default:
      return state;
  }
};
```

```JSX

//counter code

import React from "react";
import { Reducers } from "./Reducers";
import {
  Increments,
  Decrements,
  Reset,
  incrementByValue,
  decrementByValue,
} from "./Action";

const inithislState = { count: 0 };

// const reducer = (state, action) => {};

export const Counters = () => {
  const [state, dispatch] = React.useReducer(Reducers, inithislState);
  const [data, setData] = React.useState("");
  // console.log(state.count);

  // ! Please install evernote best extension for making notes in computer.

  return (
    <>
      <div>
        <h1>Counter:{state.count}</h1>
        <input
          type="number"
          onChange={(e) => setData(Number(e.target.value))}
        />
        <button onClick={() => dispatch(Increments)}>Increment</button>
        <button
          disabled={state.count === 0}
          onClick={() => dispatch(Decrements)}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(Reset)}>Reset</button>
        <button onClick={() => dispatch(incrementByValue(data ? data : 5))}>
          Increments By Value
        </button>
        <button onClick={() => dispatch(decrementByValue(data ? data : 5))}>
          Decrements By Value
        </button>
      </div>
    </>
  );
};

```
