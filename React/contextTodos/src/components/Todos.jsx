import React from "react";
import { TodoContext } from "../Context/Context";

export const Todos = () => {
    const todosInput = React.useRef("");
    const contextData = React.useContext(TodoContext)
    let value;
    const handleTodo = () => {
        // value of todosInputs
        value = todosInput.current.value;
        contextData.addTodo(value);
        value = todosInput.current.value = ""
        // console.log("input value:-", value)
    }
    return (<>
        <h1>Todos</h1>
        <input value={value} type="text" ref={todosInput} />
        <button onClick={handleTodo}>Add Todo</button>
    </>)
}