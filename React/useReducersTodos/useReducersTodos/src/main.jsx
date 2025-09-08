import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TodoContextsProvider } from "./Context/logicContext.jsx";

createRoot(document.getElementById("root")).render(
  <TodoContextsProvider>
    <App />
  </TodoContextsProvider>
);
