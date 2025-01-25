import React, { createContext } from "react";
import { nanoid } from 'nanoid'
export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = React.useState([])
    const addTodo = (task) => {
        setTodo([...todo, { "id": nanoid(), "task": task }])
    }
    const deleteTodo = (id) => {
        const deleteTodo = todo.filter((el) => el.id !== id)
        setTodo(deleteTodo)
    }
    const editTodo = () => {

    }
    return (<TodoContext.Provider value={{ todo, addTodo, deleteTodo, editTodo }}>{children}</TodoContext.Provider>)
}