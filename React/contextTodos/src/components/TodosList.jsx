import React from "react";
import { TodoContext } from "../Context/Context";

export const TodosList = () => {
    const todoDataList = React.useContext(TodoContext);
    const [toggelEdits, setToggelEdits] = React.useState(false);

    const editHandel = (id) => {
        todoDataList.editTodo(id);
        setToggelEdits(true)
    }
    return (<>
        <h1>Todo List</h1>
        {
            todoDataList.todo && todoDataList.todo.map((el, i) => (
                <div key={i}>
                    <h1>{el.task}</h1>
                    {toggelEdits == true ?
                        <div>
                            <button onClick={() => { }}>done</button>
                            <button onClick={() => { }}>cancel</button>
                        </div>
                        :
                        <div>
                            <button onClick={() => { editHandel(el.id) }}>edit</button>
                            <button onClick={() => { todoDataList.deleteTodo(el.id) }}>delete</button>
                        </div>}
                </div>
            ))
        }
    </>)
}