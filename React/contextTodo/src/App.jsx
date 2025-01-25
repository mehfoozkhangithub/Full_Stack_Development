import { useContext } from 'react'
import './App.css'
import { TodoContextProvider } from './Context/Contex'

function App() {
  const dataContext = useContext(TodoContextProvider);
  console.log(dataContext);

  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
