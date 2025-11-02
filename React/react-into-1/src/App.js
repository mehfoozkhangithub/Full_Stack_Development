<<<<<<< HEAD
import './App.css';



function App() {

  let count = 0;

  const handleIncre = () => {
    count += 1;
    document.getElementById("counter").innerText = `Counter ${count}`;
  }
  const handleDecre = () => {
    count -= 1;
    document.getElementById("counter").innerText = `Counter ${count}`;
=======
import React from 'react';
import './App.css';

import { UseRef } from "./Components/useRef.jsx"

export function App() {

  let [count, setCount] = React.useState(0);

  // let count=0

  const handleIncre = () => {
    setCount((prev) => prev + 1);
    // count += 1;
    // document.getElementById("counter").innerText = `Counter ${count}`;
  }
  const handleDecre = () => {
    setCount((prev) => prev - 1);
    // count -= 1;
    // document.getElementById("counter").innerText = `Counter ${count}`;
>>>>>>> 098edfa6f943552857d271b4f862415072f4be45
  }

  // hello
  return (
    <>
      <h1 id='counter'>Counter {count}</h1>
<<<<<<< HEAD
      <button onClick={handleIncre}>+</button>
      <button onClick={handleDecre}>-</button>
    </>
  );
}

export default App;
=======
      <button disabled={count === 10} onClick={handleIncre}>+</button>
      <button disabled={count <= 0} onClick={handleDecre}>-</button>
      <UseRef />
    </>
  );
}
>>>>>>> 098edfa6f943552857d271b4f862415072f4be45
