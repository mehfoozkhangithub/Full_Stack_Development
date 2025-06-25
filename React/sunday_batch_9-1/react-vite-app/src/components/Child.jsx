import React from 'react';

export const Child = ({ greet }) => {
  console.log('-> greet:', greet);
  return (
    <>
      <h1>hello i am child {greet}</h1>
    </>
  );
};
