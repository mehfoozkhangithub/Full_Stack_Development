import { useState } from 'react';
import './App.css';
import { InpiutBox } from './Components/InpiutBox';

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <InpiutBox
        onChange={(val) => setValue(val)}
        length={6}
        label="input box"
        perBox={1}
      />
      <h3>{value}</h3>
    </>
  );
}

export default App;
