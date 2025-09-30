import { useRef, useState } from 'react'
import { nanoid } from 'nanoid';
import axios from 'axios';
import { ListTodo } from './ListTodo';

export const Todos = () => {
    const [count, setCount] = useState(0)
    let api = `https://api-database-1.onrender.com/ToDo`

    const dataRef = useRef(null);

    const handleClick = async () => {

        const values = dataRef.current.value;

        let objectData = {
            id: nanoid(),
            todo: values,
            isEdit: false,
            isCompleted: false
        }

        try {
            let res = await axios.post(api, objectData);
            setCount((prev) => prev + 1)
            console.log('🚀 ~ res:', res);
        } catch (error) {
            console.log('🚀 ~ error:', error);
        }
    }

    return (
        <>
            <h1>Todo</h1>
            <input type="text" placeholder='add todo...' ref={dataRef} />
            <input className='btn-add' type="button" value='add todo' onClick={handleClick} />
            <ListTodo props={count} />
        </>
    )
}
