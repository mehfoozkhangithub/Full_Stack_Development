import { useContext, useRef } from 'react'
import { MyContexts } from '../context/Context_Provider'

export const Todo_List = () => {
    const { todo, setTodo } = useContext(MyContexts);
    const inputDataEdit = useRef(null);

    console.clear();

    const handleEdit = (id) => {
        const newData = todo.map(el => el.id === id ? { ...el, isEdit: true } : el);
        setTodo(newData);
    }
    const handleDelete = (id) => {
        const todoDelete = todo.filter(el => el.id !== id);
        setTodo(todoDelete);
    }

    const handleCancel = (id) => {
        const newData = todo.map(el => el.id === id ? { ...el, isEdit: false } : el);
        setTodo(newData);
    }

    const handleConfirm = (id) => {
        const newData = todo.map(el => el.id === id ? { ...el, isEdit: false, todoText: inputDataEdit.current.value } : el);
        setTodo(newData);
        inputDataEdit.current.value = ""
    }

    return (
        <>
            {
                todo?.map((el) =>
                    <div key={el.id} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <input type="checkbox" name='checkbox-completed' />
                        {
                            el.isEdit ? (<>
                                <input type="text" name='updateEdit' defaultValue={el.todoText} ref={inputDataEdit} />
                                <button onClick={() => handleConfirm(el.id)}>confirm</button>
                                <button onClick={() => handleCancel(el.id)}>cancel</button>
                            </>) : (
                                <>
                                    <h1>{el.todoText}</h1>
                                    <button onClick={() => handleEdit(el.id)}>edit</button>
                                    <button onClick={() => handleDelete(el.id)}>delete</button>
                                </>
                            )
                        }

                    </div>
                )
            }
        </>
    )
}
