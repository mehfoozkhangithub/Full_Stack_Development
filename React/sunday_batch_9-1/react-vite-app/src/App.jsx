import { useState } from 'react';
import './App.css';
import { Parent } from './components/parent';

function App() {
  const [inputValue, setValue] = useState('');

  /*   const handleInput = () => {
    const valuesById = document.querySelector('#input-val').value;
    console.log(' valuesById:', valuesById);
  }; */

  return (
    <>
      <h1>hello</h1>
      {/*  this is basic js logic getting the input value */}
      {/* <input type="text" id="input-val" /> */}
      {/*  now we are getting the value by hooks */}
      <input
        type="text"
        value={inputValue}
        // onChange={(event) => console.log(event.target.value)}
        onChange={(event) => setValue(event.target.value)}
      />

      <Parent props={inputValue} />
    </>
  );
}

export default App;
