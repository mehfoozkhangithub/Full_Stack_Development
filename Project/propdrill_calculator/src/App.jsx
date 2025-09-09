import { useState } from 'react'
import './App.css'
import { Child } from './components/Child';
function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operators, setOperator] = useState("");


  return (
    <>
      <h1>calculator parent</h1>
      <input type="text" onChange={(e) => setNumber1(e.target.value)} placeholder='please enter the number1' /><br /><br />
      <input type="text" onChange={(e) => setOperator(e.target.value)} placeholder='please enter the operator' /><br /><br />
      <input type="text" onChange={(e) => setNumber2(e.target.value)} placeholder='please enter the number2' /> <br /> <br />
      <Child props={{ number1, operators, number2 }} />
    </>
  )
}

export default App
