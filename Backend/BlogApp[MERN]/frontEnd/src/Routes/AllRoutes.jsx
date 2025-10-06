import { Router, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";

export const AllRoutes = () => {
    return (
        <>
            <Router>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
            </Router>
        </>
    )
}
