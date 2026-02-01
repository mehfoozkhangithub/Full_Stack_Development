import { useContext } from 'react';
import { ContextCreate } from '../Context/CounterProvider';

export const Counter = () => {
  const { count, setCount } = useContext(ContextCreate);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter Child {count}</h1>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}>dec</button>
    </>
  );
};
