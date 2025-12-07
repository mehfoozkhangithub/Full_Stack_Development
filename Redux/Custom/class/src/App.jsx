import { useState } from 'react';
import './App.css';
import { InpiutBox } from './Components/InpiutBox';

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <InpiutBox
        onChange={(val) => setValue(val)}
        length={4}
        label="input box"
        perBox={1}
      />
      <h3>{value}</h3>
    </>
  );
}

export default App;
