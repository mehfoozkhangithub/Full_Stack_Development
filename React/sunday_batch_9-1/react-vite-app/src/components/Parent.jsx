import React from 'react';
import { Child } from './Child';

export const Parent = ({ props }) => {
  return (
    <>
      <Child greet={props} />
    </>
  );
};
