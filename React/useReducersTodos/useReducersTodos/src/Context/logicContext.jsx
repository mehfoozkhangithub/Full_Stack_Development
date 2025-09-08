import { createContext, useState } from "react";

export const TodoContexts = createContext(null);

export const TodoContextsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TodoContexts.Provider value={{ data, setData }}>
      {children}
    </TodoContexts.Provider>
  );
};
