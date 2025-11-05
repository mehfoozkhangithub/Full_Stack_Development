import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';

export const Router_Page = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};
