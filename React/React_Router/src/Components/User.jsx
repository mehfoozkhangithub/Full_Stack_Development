import React from "react";
import { Link } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json())
}

export const User = () => {
    const [data, setData] = React.useState({})
    React.useEffect(() => {
        getData(`https://reqres.in/api/users`).then((res) => setData(res)
        )
    }, [])
    return (<>
        <h1>Contact</h1>
        <div>
            {
                data.data?.map((el, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                        <img src={el.avatar} alt="" />
                        <Link to={`${el.id}`}>
                            {el.first_name} {" "} {el.last_name}
                        </Link>
                    </div>
                ))
            }
        </div>
    </>)
}