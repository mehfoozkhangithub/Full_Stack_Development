import React from 'react';

export const Child = ({ props, sendFunc }) => {
  return (
    <>
      <h1>child.js/child components have this props {props}</h1>
      <button onClick={sendFunc}>child button</button>
    </>
  );
};
