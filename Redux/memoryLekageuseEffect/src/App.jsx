import { useState } from 'react';
import { CounterEffect } from './Components/CounterEffect';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && <CounterEffect />}
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        toggle
      </button>
    </>
  );
}

export default App;
