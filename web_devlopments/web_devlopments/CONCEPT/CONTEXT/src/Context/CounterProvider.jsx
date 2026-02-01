import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ContextCreate = createContext(null);

export const CounterContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(0);

  return (
    <ContextCreate.Provider value={{ count, setCount, dummy, setDummy }}>
      {children}
    </ContextCreate.Provider>
  );
};
