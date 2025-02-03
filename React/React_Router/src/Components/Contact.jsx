import React from "react";
import { Link } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json())
}

export const Contact = () => {
    const [data, setData] = React.useState({})
    React.useEffect(() => {
        getData(`https://reqres.in/api/users`).then((res) => setData(res)
        )
    }, [])
    return (<>
        <h1>Contact</h1>
        <ul>
            {
                data.data?.map((el, i) => (
                    <li key={i}>
                        <Link to={`user/${el.id}`}>
                            {el.first_name} {" "} {el.last_name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </>)
}