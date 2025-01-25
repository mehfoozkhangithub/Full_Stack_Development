import React from "react";
import { TodoContext } from "../Context/Context";

export const TodosList = () => {
    const todoDataList = React.useContext(TodoContext);


    return (<>
        <h1>Todo List</h1>
        {
            todoDataList.todo && todoDataList.todo.map((el, i) => (
                <div key={i}>
                    <h1>{el.task}</h1>
                    <button onClick={() => { }}>edit</button>
                    <button onClick={() => { todoDataList.deleteTodo(el.id) }}>delete</button>
                </div>
            ))
        }
    </>)
}