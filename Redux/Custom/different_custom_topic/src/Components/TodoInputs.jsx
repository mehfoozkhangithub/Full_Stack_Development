import React, { useState } from 'react';

export const TodoInputs = () => {
  const [text, setText] = useState('');

  const handleAdd = () => {};
  return (
    <form onSubmit={handleAdd} style={{ display: 'flex', gap: 8 }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
