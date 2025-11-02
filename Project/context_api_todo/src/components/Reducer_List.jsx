import { useRef } from "react";

export const Reducer_List = (value) => {

    const inputDataEdit = useRef(null);

    const { state, handleDelete, handleEdit, handleConfirm, handleCancel } = value.props;

    return (
        <>
            <h1>Reducer_List</h1>
            {
                state?.map((el) =>
                    <div key={el.id} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <input type="checkbox" name='checkbox-completed' />
                        {
                            el.isEdit ? (<>
                                <input type="text" name='updateEdit' defaultValue={el.todoText} ref={inputDataEdit} />
                                <button onClick={() => handleConfirm(el.id, inputDataEdit.current.value)}>confirm</button>
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
                )}
        </>
    )
}
