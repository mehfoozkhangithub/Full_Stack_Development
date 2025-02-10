import React from "react";

const inithislState = { count: 0 };

const reducer = (state, action) => {
  console.log(state.count);

  if (action.type === "Incerement") {
    return { count: state.count + 1 };
  }
  if (action.type === "Denerement") {
    return { count: state.count - 1 };
  }
};

export const Counters = () => {
  const [state, dispatch] = React.useReducer(reducer, inithislState);
  //  console.log(state.count);

  return (
    <>
      <div>
        <h1>Counter:{state.count}</h1>
        <button onClick={() => dispatch({ type: "Incerement" })}>
          Incerement
        </button>
        <button
          disabled={state.count === 0}
          onClick={() => dispatch({ type: "Denerement" })}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
