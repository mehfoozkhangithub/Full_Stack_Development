import { useContext } from 'react'
import { MyContexts } from './context/Context_Provider'
import './App.css'
import { useRef } from 'react';
import { Todo_List } from './components/Todo_List';

function App() {

  const { setTodo } = useContext(MyContexts);
  const inputData = useRef(null);


  const handleTodo = () => {
    let value = inputData.current.value;

    let todos = {
      id: Date.now(),
      todoText: value,
      isEdit: false,
      isCompleted: false
    }
    setTodo(prev => [...prev, todos]);
    inputData.current.value = "";
  }



  return (
    <>
      <h1>Todo..... 📖📕</h1>
      <div>
        <input type="text" name="todo-input" ref={inputData} />
        <button name="todo-btn" onClick={handleTodo}>add to list</button>
      </div>
      <Todo_List />
    </>
  )
}

export default App
