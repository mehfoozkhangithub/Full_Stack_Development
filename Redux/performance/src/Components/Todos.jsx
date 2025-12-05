import React, { useCallback, useState } from 'react';
import TodosItems from './TodosItems';

const initialTodo = [
  {
    id: 1,
    currentTodo: 'hello',
    status: false,
  },
  {
    id: 2,
    currentTodo: 'hello',
    status: false,
  },
];

export const Todos = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState(initialTodo);

  const handleInput = () => {
    const Value = {
      id: data.length + 1,
      currentTodo: text,
      status: false,
    };
    setData([...data, Value]);
    setText('');
  };

  const handleEdits = useCallback((id) => {
    setData((prev) =>
      prev.map((ed) => (ed.id === id ? { ...ed, status: !ed.status } : ed))
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setData((prev) => prev.filter((ed) => ed.id !== id));
  }, []);

  return (
    <>
      <input
        defaultValue={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleInput}>click</button>
      {data &&
        data.map((el) => {
          return (
            <TodosItems
              key={el.id}
              {...el}
              handleEdits={handleEdits}
              handleDelete={handleDelete}
            />
          );
        })}
    </>
  );
};

/* 

{} === {}

(1st render )useCallBack -> Ax11
(2nd render )useCallBack -> Ax11

Ax11 === Ax11

*/
