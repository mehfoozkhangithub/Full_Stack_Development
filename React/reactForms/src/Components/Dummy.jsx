import { useState } from "react"


export const Dummy = () => {
    const [data, setData] = useState(0);

    const handleClick = () => {
        setData((prev) => prev + 1);
    }
    // const handleClick = (datas) => {
    //     console.log(datas + 1);
    // }
    console.log(data);


    return (
        <>
            <h1>Dummy : {data}</h1>
            <button onClick={handleClick}>click</button>
        </>
    )
}
