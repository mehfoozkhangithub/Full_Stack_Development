import { useRef, useState } from 'react';

// import { useRef } from 'react';

export const App = () => {
  const catchNode = useRef(null);

  const [count, setCount] = useState(0);

  // let count = 0; // this is state less code
  // let mainId; // this is useing for stateless components

  /*   const handleInc = () => {
    count++;
    document.querySelector('h1').innerText = `Counter ${count}`;
    console.log(count);
  };
  const handleDec = () => {
    count--;
    document.querySelector('h1').innerText = `Counter ${count}`;
    console.log(count);
  };
 */
  const handleStart = () => {
    catchNode.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(catchNode.current);
  };
  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>

      {/* <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button> */}
    </>
  );
};
