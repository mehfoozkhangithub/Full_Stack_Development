import { useContext } from 'react';
import { CounterContext } from '../Context/CounterContext';

function Counter() {
  const { count, setCount, name } = useContext(CounterContext);

  return (
    <>
      <h1>my name is {name}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
