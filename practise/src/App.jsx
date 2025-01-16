import { useEffect, useState } from "react";
import "./App.css";
import Explain from "./useEffect_Explain/Explain.jsx";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button onClick={() => setToggle(!toggle)} className="toggle_btn">
        toggle
      </button>
      {toggle ? <Explain /> : ""}
    </>
  );
}

export default App;
