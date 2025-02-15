import React from "react";
import { AuthContext } from "./../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { toggelAuth } = React.useContext(AuthContext);
  const navigat = useNavigate();
  if (toggelAuth) {
    navigat("/users");
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={toggelAuth}>login</button>
    </>
  );
};
