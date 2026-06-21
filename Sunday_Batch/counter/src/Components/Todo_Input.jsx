import React from 'react';

export const Todo_Input = ({ props }) => {
  const [text, setText] = React.useState('');
  const handleAdd = () => {
    const todo = {
      id: Date.now(),
      text: text,
      isEdits: false,
      isCompleted: false,
    };
    props((prev) => [...prev, todo]);
    setText('');
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
