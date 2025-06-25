import React from 'react';

import { Parent } from './components/Parent';

export const App = () => {
  let num = 30;
  return (
    <>
      <Parent props={num} />
    </>
  );
};
