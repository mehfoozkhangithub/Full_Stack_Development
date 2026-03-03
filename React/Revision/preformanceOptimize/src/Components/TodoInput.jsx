import React from 'react';
import { TodoItems } from './TodoItems';

export const TodoInput = () => {
  const initialValue = [
    { id: 1, text: 'learn react', isEdits: false, isCompelte: false },
    { id: 2, text: 'learn react', isEdits: false, isCompelte: false },
    { id: 3, text: 'learn react', isEdits: false, isCompelte: false },
  ];

  const [todo, setTodo] = React.useState(initialValue);
  const [text, setText] = React.useState('');
  const handleAdd = () => {
    const todo = {
      id: todo.length++,
      text: text,
      isEdits: false,
      isCompelte: false,
    };
    setTodo((prev) => [...prev, todo]);
  };
  return (
    <>
      <div style={{ margin: '2rem' }}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAdd}>add</button>
        {todo.length > 0 &&
          todo.map((items) => {
            return <TodoItems key={items.id} {...items} />;
          })}
      </div>
    </>
  );
};
