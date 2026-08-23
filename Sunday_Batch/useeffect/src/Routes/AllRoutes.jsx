import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UseEffects } from '../Components/UseEffects';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Navebar } from '../Components/Navebar';
import { Error } from '../Pages/Error';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';

export const AllRoutes = () => {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/effect" element={<UseEffects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
