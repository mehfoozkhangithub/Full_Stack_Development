import { useState } from "react";
import Child from "./components/Child";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
    </>
  );
}

export default App;
