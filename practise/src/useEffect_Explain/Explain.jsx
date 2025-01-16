import React, { useEffect, useState } from "react";
import "../App.css";

const Explain = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Counter Mount");
    return function () {
      console.log("Unmount Counter");
    };
  }, []);

  useEffect(() => {
    console.log("User Updated Count", counter);
    return () => {
      console.log("unmount return useEffect", counter);
    };
  }, [counter]);

  return (
    <>
      <div className="main_div">
        <h2>{counter}</h2>
        <div className="btn_counter">
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
          <button
            disabled={counter === 0}
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
export default Explain;
