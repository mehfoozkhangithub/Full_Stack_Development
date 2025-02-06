import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from './../Context/AuthContext';

const getData = (url) => {
    return fetch(url).then((res) => res.json())
}

export const User = () => {
    const [data, setData] = React.useState({});
    const { toggelAuth } = React.useContext(AuthContext);
    // const navigate = useNavigate();    // this code just to understand we sifted into PrivateRoute
    // const { isAuth } = React.useContext(AuthContext)  // this code just to understand we sifted into PrivateRoute
    // console.log(isAuth, "isAuth");

    React.useEffect(() => {
        // this is we check the authentication.
        // if (!isAuth) {
        //     navigate("/")
        // }
        // above code we have better approch private route component 
        getData(`https://reqres.in/api/users`).then((res) => setData(res))
    }, []);

    return (<>
        <h1>user</h1>
        <button onClick={toggelAuth}>log out</button>
        <div>
            {
                data.data?.map((el, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                        <img src={el.avatar} alt="" />
                        <Link to={`/users/${el.id}`}>
                            {el.first_name} {" "} {el.last_name}
                        </Link>
                    </div>
                ))
            }
        </div>
    </>)
}