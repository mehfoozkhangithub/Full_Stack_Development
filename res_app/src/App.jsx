import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
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
