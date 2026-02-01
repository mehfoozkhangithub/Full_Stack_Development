import { Route, Routes } from 'react-router-dom';

import React from 'react';
import { Home } from '../Pages/Home';
import { Todo } from '../Pages/Todo';
import { SignUp } from '../Pages/SignUp';
import { LoginPage } from '../Pages/Login';
import { Counter } from '../Components/Counter';
import { Navbar } from '../Components/Navbar';
import { PrivateRoutes } from '../Components/PrivateRoutes';

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/todo"
          element={
            <PrivateRoutes>
              <Todo />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </>
  );
};
