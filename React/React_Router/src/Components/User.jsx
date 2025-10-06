/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from './../Context/AuthContext';

const getData = (url) => {
    return fetch(url, {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    }).then((res) => res.json()).catch((err) => console.log(err));
}

const getCurrentPageFromUrl = (value) => {
    value = Number(value);
    if (typeof value === "number" && value <= 0) value = 1;

    if (!value) value = 1;

    return value;
}

export const User = () => {
    const [data, setData] = React.useState({});
    const { toggelAuth } = React.useContext(AuthContext);
    const [searchParam, setSearchParams] = useSearchParams();
    const initial = getCurrentPageFromUrl(searchParam.get("page"))
    const [page, setPage] = React.useState(initial);
    console.log('🚀 ~ page:', page);
    const [text, setText] = React.useState("")
    // const navigate = useNavigate();    // this code just to understand we sifted into PrivateRoute
    // const { isAuth } = React.useContext(AuthContext)  // this code just to understand we sifted into PrivateRoute
    // console.log(isAuth, "isAuth");

    React.useEffect(() => {
        // this is we check the authentication.
        // if (!isAuth) {
        //     navigate("/")
        // }
        // above code we have better approch private route component
        getData(`https://reqres.in/api/users?page=${page}`).then((res) => setData(res)).catch((err) => console.log(err))
    }, [page]);


    React.useEffect(() => {
        setSearchParams({ page, text })
    }, [page, text])

    return (<>
        <h1>user</h1>
        <button onClick={toggelAuth}>log out</button>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <div>
            {
                data.data?.map((el, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                        <img src={el.avatar} alt="peron_logo" />
                        <Link to={`/users/${el.id}`}>
                            {el.first_name} {" "} {el.last_name}
                        </Link>
                    </div>
                ))
            }
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <button>{page}</button>
            <button disabled={page >= 2} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    </>)
}