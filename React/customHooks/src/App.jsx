
import './App.css'
import { useToggle } from './hook/useToggle';
import { useFetch } from './hook/useFetch';
// import { useState } from 'react';

function App() {
  const BASE_URL = `https://jsonplaceholder.typicode.com/posts`;
  // const BASE_URL = `https://api-database-1.onrender.com/hotel`;


  const [value, toggleValue] = useToggle(true);
  // console.log('🚀 ~ toogleValue:', toogleValue);
  const [data, toggleData] = useToggle(true);

  const { datas, error, loading } = useFetch(BASE_URL);

  // const [count, setCount] = useState(0);
  // setCount(count + 1);
  // setCount(count + 1);
  // console.log('🚀 ~ count:', count);


  return (
    <>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>

      {
        value ? <h1>custom hooks</h1> : null
      }
      <hr />

      <button onClick={toggleData}>Toggle Heading</button>
      <button onClick={() => toggleData(false)}>Hide Heading</button>
      <button onClick={() => toggleData(true)}>Show Heading</button>
      {
        data ? <h1>second hooks data</h1> : null
      }

      <div className="fetch">
        <h1>custom react hook [data fetching]</h1>
        {loading && <h3>loading...</h3>}
        {error && <h3>Error: Somthing went wrong...</h3>}
        {datas.length}
        <pre>
          {

            JSON.stringify(datas, undefined, 2)
          }
        </pre>
      </div>
    </>
  )
}

export default App
