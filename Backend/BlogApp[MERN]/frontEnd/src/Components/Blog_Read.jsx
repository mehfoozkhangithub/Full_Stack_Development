
// const baseURL = import.meta.env.VITE_BASE_URL;

import { useEffect, useState } from "react";
import { Blog_Read_Api } from "../Api/Blog_Read"

const baseURL = import.meta.env.VITE_BASE_URL;


export const Blog_Read = () => {

    const [data, setData] = useState(null)

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            let final = await Blog_Read_Api(baseURL, token)
            setData(final);
        }
        fetchData()
    }, [])


    return (
        <>
            <h1>Blog_Read</h1>
            {
                data?.map((el) => (
                    <div key={el._id}>
                        <h1>{el.title}</h1>
                    </div>
                ))
            }
        </>
    )
}
