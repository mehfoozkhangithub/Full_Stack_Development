import React, { useState } from 'react';
import { Child } from './Components/Child';

export const App = () => {
  const [data, setData] = useState(20);

  //    create a function to manupulate the data of useState hooks

  const handleCount = () => {
    setData((prev) => prev + 1);
  };

  return (
    <>
      <h1>hello use State</h1>
      <h3>this is from App.jsx {data}</h3>
      <Child props={data} sendFunc={handleCount} />
      <button onClick={handleCount}> App click </button>
    </>
  );
};
