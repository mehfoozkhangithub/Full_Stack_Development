import { useState } from "react";
import React from "react";
import "./App.css";
// import { Counter } from "./Components/Counter";
import { Todos } from "./Components/Todos";
import { TodoList } from "./Components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter/> */}
      <Todos />
      <TodoList />
    </>
  );
}

export default App;
