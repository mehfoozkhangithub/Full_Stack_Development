import { createContext, useState } from 'react';

export const ContextTodo = createContext(null);

export const TodoContextProvider = ({ Children }) => {
    const [todo, setTodo] = useState([]);
    return (<ContextTodo.Provider value={{ todo, setTodo }}>{Children}</ContextTodo.Provider>)
}
