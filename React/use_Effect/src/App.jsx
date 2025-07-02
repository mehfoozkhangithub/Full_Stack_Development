import React from 'react';
import './App.css';

export const App = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(10);

  // React.useEffect(() => {
  //   console.log('-> count:always run', count);
  // });

  React.useEffect(() => {
    console.log('-> count: have empty dependency', count);
  }, []);

  React.useEffect(() => {
    console.log('-> count: have some dependency', count);
  }, [count, count2]);

  return (
    <>
      <h1> count_1 {count}</h1>
      <h1> count_2 {count2}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount2((prev) => prev - 1)}>
        count2 decrement
      </button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        count2 increment
      </button>
    </>
  );
};
