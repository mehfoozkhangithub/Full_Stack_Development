import { useReducer } from "react";
import { Initial_Value, Reducer } from "../Reducer/ReducerTodos";
import { TodosContexts } from "./CreateContext";

export const TodoContexrProviders = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, Initial_Value.todos);
  return (
    <TodosContexts.Provider value={{ state, dispatch }}>
      {children}
    </TodosContexts.Provider>
  );
};
