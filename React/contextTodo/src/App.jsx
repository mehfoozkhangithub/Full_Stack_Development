import { useContext } from 'react'
import './App.css'
import { ContextTodo } from './Context/Contex';

export const App = () => {
  const dataContext = useContext(ContextTodo);
  console.log("this is data od Context", dataContext);

  return (
    <>
      <h1>hello</h1>
    </>
  )
}