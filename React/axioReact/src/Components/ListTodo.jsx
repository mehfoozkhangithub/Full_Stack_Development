import axios from "axios";
import { useEffect, useState } from "react";

const getData = async (url) => {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
}

export const ListTodo = (props) => {
    const [apiData, setApiData] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    let api = `https://api-database-1.onrender.com/ToDo`


    const handleEdit = async (id) => {
        try {
            let updateEdit = {
                isEdit: true
            }
            await axios.patch(`${api}/${id}`, updateEdit);
            // update the item in local state
            setApiData((prev) =>
                prev.map((todo) =>
                    todo.id === id ? { ...todo, ...updateEdit } : todo
                )
            );
        } catch (error) {
            console.log('🚀 ~ error:', error);
        }
    }


    const handleDel = async (id) => {
        await axios.delete(`${api}/${id}`);
        setApiData((prev) => prev.filter((item) => item.id !== id));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res1 = await getData(api)
                setApiData(res1);
            } catch (error) {
                console.log('🚀 ~ error:', error);
                setIsError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [props.props]);

    if (isloading) return <h1>Loading....</h1>
    if (isError) return <h1>404 Error....</h1>


    return (
        <>
            <h1>List Todo</h1>
            {
                apiData?.map((el) => (
                    <div className="todoListTask" key={el.id}>
                        <input type="checkbox" />
                        <h1>{el.todo}</h1>
                        <button onClick={() => handleEdit(el.id)}
                            className="btn-edit">edit</button>
                        <button onClick={() => handleDel(el.id)} className="btn-del">delete</button>
                    </div>
                ))
            }
        </>
    )
}
