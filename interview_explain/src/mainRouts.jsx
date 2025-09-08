import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Login from "./components/Login";

function MainRouts() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRouts;
