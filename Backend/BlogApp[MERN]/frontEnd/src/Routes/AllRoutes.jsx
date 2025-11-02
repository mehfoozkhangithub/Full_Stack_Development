import { Router, Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Blog_Read } from "../Components/Blog_Read";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
                <Route path="/blog-read" element={<Blog_Read />} ></Route >
            </Routes>
        </>
    )
}
