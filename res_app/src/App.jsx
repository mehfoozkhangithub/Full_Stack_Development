import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import axios from "axios";

const apiFetch = async () => {
  const url = " https://jsonplaceholder.typicode.com/photos";

  try {
    const res = await axios.get(url);
    console.log("this api call", res);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  // ! api fetch here

  useEffect(() => {
    apiFetch();
  });

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/card/:id" element={<CardDetails />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
