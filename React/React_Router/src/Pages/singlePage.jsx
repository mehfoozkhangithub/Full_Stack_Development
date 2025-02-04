import React from "react";
import { Link, useParams } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json())
}

export const SinglePage = () => {
    const params = useParams();
    const [singleUserData, setSingleUserData] = React.useState({})
    console.log(params);

    React.useEffect(() => {
        getData(`https://reqres.in/api/users/${params.id}`).then((res) => setSingleUserData(res.data));
    }, [])

    console.log(singleUserData, "this is single data");

    return <>
        <h1>Single Page</h1>
        {
            <div key={singleUserData.id} style={{ padding: "10px 30px" }}>
                <img src={singleUserData.avatar} alt="persone_img" />
                <p>name : {singleUserData.first_name}</p>{" "}<p>{singleUserData.last_name}</p>
                <p>email : {singleUserData.email}</p>
                <p>id: {singleUserData.id}</p>
                <Link to="/users">Go Back</Link>
            </div>

        }
    </>

}