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

  // ! Please install evernote best extention for making notes in computer.

  return (
    <>
      <div>
        <h1>Counter:{state.count}</h1>
        <input
          type="number"
          onChange={(e) => setData(Number(e.target.value))}
        />
        <button onClick={() => dispatch(Increments)}>Incerement</button>
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
