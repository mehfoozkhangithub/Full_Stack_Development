import React, { useState } from 'react';

// import { Child } from './components-2/Child'
// import { Parent } from './components/Parent';

export const App = () => {
  const [count, setCount] = useState(0);

  //  const [Find Dom Node, Force Update]= useState(Set State)  <-- components Api
  // let num = 30;
  // let age = 33;
  // this is state-less components
  return (
    <>
      {/* this is defferent example */}
      {/* <Parent props={num} /> */}

      {/*  this is state-less example */}
      {/* <h1>num is {num}</h1> */}
      {/* <Child props={{ num, age }} /> */}

      {/* state-full example */}

      <h1>count {count}</h1>
      <button onClick={() => { setCount((prev) => prev + 1) }}>+</button>
      <button onClick={() => { setCount((prev) => prev - 1) }}>-</button>

    </>
  );
};
