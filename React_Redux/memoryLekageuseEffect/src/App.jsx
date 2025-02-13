import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { CounterEffect } from "./Components/CounterEffect";
import { Dummy } from "./Components/dummy";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  //! Memoize the update function with useCallback
  const memoizedSetCount = useCallback(
    (newCount) => {
      setCount(newCount);
    },
    [] //! Empty dependency array ensures it's only created once
  );

  //! Optionally memoize derived values if necessary
  const memoizedCount = useMemo(() => count, [count]);

  //! Memoizing the toggle setter function
  const memoizedToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <>
      <CounterEffect count={memoizedCount} setCount={memoizedSetCount} />
      <Dummy toggle={toggle} setToggle={memoizedToggle} />
    </>
  );
}

export default App;
