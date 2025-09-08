import { useRef } from 'react';
import './App.css';
import { useState } from 'react';
import Props27 from './Components/Props27';

function App() {
  const inputVal = useRef(null);
  const [data, setData] = useState(''); // component api

  const handleInput = (e) => {
    if (e.code === 'Enter') {
      let values = inputVal.current.value;
      setData(values);
      console.log('-> values:', values);
      inputVal.current.value = null;
    }
  };

  console.log('-> data:', data);

  return (
    <>
      <h1>useRef {data}</h1>
      <input
        ref={inputVal}
        type="text"
        placeholder="enter the value..."
        style={{ padding: '10px' }}
        onKeyDown={(e) => handleInput(e)}
      />

      {/* Passing custom props */}
      <Props27 name="Real Comando" age={25} />

      {/* Not passing any props - will use default */}
      <Props27 />
    </>
  );
}

export default App;
