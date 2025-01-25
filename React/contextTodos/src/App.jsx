
import React from 'react'
import './App.css'
import { TodoContext } from './Context/Context'
import { Todos } from "./components/Todos"
import { TodosList } from "./components/TodosList"

function App() {
  const todoData = React.useContext(TodoContext)
  console.log(todoData);

  return (
    <>
      <h1>hello</h1>
      <Todos />
      <TodosList />
    </>
  )
}

export default App
