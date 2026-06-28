import React from 'react';
import { Add } from './Components/Add';
import Abrakadabra from './Components/Sub';

export const App = () => {
  const [count, setCount] = React.useState(0);

  const add = 5;

  const sub = 10;

  return (
    <div>
      <Add props={{ count, add }} />
      <Abrakadabra props={{ count, sub }} />
      <button onClick={() => setCount(count + add)}>Increment</button>
    </div>
  );
};
