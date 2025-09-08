import React from 'react';

import './App.css';

function App() {

  const valueRef = React.useRef(null);
  const [text, setText] = React.useState(null);


  const handleFunctions = () => {
    let value = valueRef.current.value;
    setText(value);
    valueRef.current.value = null
  }
  // const [text, setText] = useState('');
  // console.log('🚀 ~ text:', text);

  return (
    <>
      <h1>useRef hook</h1>

      <h3>text : {text}</h3>
      {/* <input type="text" onChange={(event) => setText(event.target.value)} /> */}

      <input type="text" ref={valueRef} onKeyDown={(event) => event.key === 'Enter' ? handleFunctions() : null} />



    </>
  )
}

export default App
