import React from 'react';

export const Child = ({ greet }) => {
  console.log(' greet:', greet.props);
  return (
    <>
      <h1>child components {greet.props}</h1>
    </>
  );
};
