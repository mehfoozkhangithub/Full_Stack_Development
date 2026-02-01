import { useState } from 'react';
import './App.css';
import { CounterEffect } from './components/CounterEffect';

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
        toggle counter app
      </button>
    </>
  );
}

export default App;
