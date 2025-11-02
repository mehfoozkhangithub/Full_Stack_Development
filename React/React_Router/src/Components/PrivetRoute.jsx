/* eslint-disable react/prop-types */
import React from "react";
import { AuthContext } from './../Context/AuthContext';
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children }) => {

    const { isAuth } = React.useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/" />
    }
    return children
}