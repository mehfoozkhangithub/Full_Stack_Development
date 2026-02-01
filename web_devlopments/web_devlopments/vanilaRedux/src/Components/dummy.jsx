import React from 'react';

import { myStore } from '../Store/Store.js';

export const Dummy = () => {
  const value = myStore.getState();
  return <h1>dummy {value.count}</h1>;
};
