
import { useReducer, useRef } from 'react'

import { Reducer } from "../Reducer/Reducer"
import { Reducer_List } from './Reducer_List'
import { InitialValue } from "../Reducer/Store"
import { ADD_TODO, DELETE_TODO, EDIT_TODO, CONFIRM_TODO, CANCEL_TODO } from "../Reducer/Action"


export const Reducer_Todo = () => {
    const inputData = useRef(null);
    const [state, dispatch] = useReducer(Reducer, InitialValue);


    const handleTodo = () => {

        if (inputData.current.value === "") return;

        let todos = {
            id: Date.now(),
            todoText: inputData.current.value,
            isEdit: false,
            isComplete: false
        }

        dispatch({ type: ADD_TODO, payload: todos });
        inputData.current.value = ""
    }

    const handleEdit = (id) => {
        dispatch({ type: EDIT_TODO, payload: { id: id } });
    }
    const handleDelete = (id) => {
        dispatch({ type: DELETE_TODO, payload: { id: id } });
    }

    const handleConfirm = (...value) => {
        dispatch({ type: CONFIRM_TODO, payload: { id: value[0], updateText: value[1] } });
    }

    const handleCancel = (id) => {

        dispatch({ type: CANCEL_TODO, payload: { id: id } });
    }

    return (
        <>
            <h1>Reducer_Todo.....📖📕</h1>
            <input type="text" name="todo-input" ref={inputData} />
            <button onClick={handleTodo}>add todo</button>
            <Reducer_List props={{ state, handleEdit, handleDelete, handleCancel, handleConfirm }} />
        </>
    )
}
