import React, { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

function Counter() {
  const counterUpdate = useContext(CounterContext);
  return (
    <>
      <div>
        <button onClick={() => counterUpdate.setCount(counterUpdate.count + 1)}>
          Increment
        </button>
        <button onClick={() => counterUpdate.setCount(counterUpdate.count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
