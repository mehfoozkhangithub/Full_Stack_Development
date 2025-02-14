import React from "react";

export const CounterEffect = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let id = setInterval(() => {
      console.log(`this is time`, Date.now());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

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
};
