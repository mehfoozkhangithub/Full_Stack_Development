/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

export const CounterEffect = React.memo(({ count, setCount, toogle }) => {
  // const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Counter :{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="btn"
      >
        Inc
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
        className="btn"
      >
        Dec
      </button>
    </>
  );
});
