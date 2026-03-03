import React from 'react';
const expensiceOperation = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    continue;
  }
  return true;
};
export const TodoItems = ({ id, text, status }) => {
  expensiceOperation(200);
  return (
    <div key={id}>
      <h1>{text}</h1>
      <h3>{status ? 'true' : 'false'}</h3>
    </div>
  );
};
