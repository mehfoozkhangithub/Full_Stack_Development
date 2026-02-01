import React, { useMemo } from 'react';

const expensiveOperation = (value) => {
  let start = Date.now();
  while (Date.now() - start <= value) {
    continue;
  }
  return true;
};

const TodosItems = ({ id, currentTodo, status, handleDelete, handleEdits }) => {
  // expensive operation sync-behaviour

  useMemo(() => expensiveOperation(200), []);
  // expensiveOperation(200);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0.5em 0',
          gap: '2em',
        }}
      >
        <h3>{id}</h3>
        <h2>{currentTodo}</h2>
        <h3>{status ? 'true' : 'false'}</h3>
        <button onClick={() => handleEdits(id)}>edit</button>
        <button onClick={() => handleDelete(id)}>delete</button>
      </div>
    </>
  );
};
// export default TodosItems;

/* const checkEquals=(prevValue, currenValue) => {
  return (
    prevValue.currentTodo === currenValue.currentTodo &&
    prevValue.status === currenValue.status
  );
} */

export default TodosItems;

// higher oreder components
// export default React.memo(TodosItems);

// export default React.memo(TodosItems, checkEquals);

/* 

prevValue === currentValue

id === id

currentTodo === currentTodo

status === status

handleDelete === handleDelete -> newValue ouccure = false

*/
