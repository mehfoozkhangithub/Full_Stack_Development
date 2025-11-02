import React from "react";
import { AuthContext } from "./../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { toggelAuth } = React.useContext(AuthContext);
  console.log('🚀 ~ toggelAuth:', toggelAuth);
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


/* 
! HomePage.jsx:11 You should call navigate() in a React.useEffect(), not when your component is first rendered. Error Component Stack
    at HomePage (HomePage.jsx:6:32)
    at AuthContextProvider (AuthContext.jsx:7:39)



& react-router-dom.js?v=d6108373:1288 Throttling navigation to prevent the browser from hanging. See https://crbug.com/1038223. Command line switch --disable-ipc-flooding-protection can be used to bypass the protection
*/