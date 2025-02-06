import React from "react";
import { AuthContext } from "../Context/AuthContext";

export const Contact = () => {
    const data = React.useContext(AuthContext);
    console.log(data);
    return (<>
        <h1>Contact</h1>
    </>)
}