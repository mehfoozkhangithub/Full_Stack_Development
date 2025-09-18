import React, { useRef } from 'react'

export const AddTodo = () => {


    const data = useRef(null);

    const handleTodo = () => {

        if (data.current.value.trim() === "") return;

        let todo = {
            id: Date.now(),
            todo: data.current.value,
            isEdits: false,
            isComplete: false
        };
        sessionStorage.setItem("todos", JSON.stringify(todo));
    }



    return (
        <>

            <h1>todo</h1>
            <input type="text" placeholder='enter the todo...' ref={data} />
            <button onClick={handleTodo}>add</button>

        </>
    )
}
