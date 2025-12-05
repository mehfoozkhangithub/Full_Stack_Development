import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { InpiutBox } from './Components/InpiutBox';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InpiutBox length={4} label="input box" />
    </>
  );
}

export default App;
