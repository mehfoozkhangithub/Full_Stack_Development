import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  const inputValue = useRef(null);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      let values = inputValue.current.value;
      setData(values);
      inputValue.current.value = '';
    }
  };

  console.log('-> data:', data);
  return (
    <>
      <h1>useRef Hooks {data}</h1>
      {/* here we use normal event to access the node of dom */}
      <input type="text" onChange={(e) => setData(e.target.value)} />

      {/* here we use hooks of useRef */}

      <input
        ref={inputValue}
        placeholder="useref input"
        type="text"
        onKeyDown={(e) => handleInput(e)}
      />
      {/* <button onClick={handleInput}>click me to useRef</button> */}
    </>
  );
}

export default App;
