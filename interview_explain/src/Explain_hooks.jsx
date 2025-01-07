import React from "react";
import { useEffect, useState } from "react";

function Explain_hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("counter mount");
    return () => {
      console.log("unmount counter");
    };
  }, []);

  useEffect(() => {
    console.log("user update counter");
  }, [count]);
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button disabled={count === 0} onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </>
  );
}

export default Explain_hooks;
