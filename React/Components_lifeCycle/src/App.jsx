import React from 'react';

export const App = () => {
  const [count, setCount] = React.useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>count {count}</h1>
      <button onClick={() => inc}>inc</button>
      <button onClick={() => dec}>dec</button>
    </>
  );
};
