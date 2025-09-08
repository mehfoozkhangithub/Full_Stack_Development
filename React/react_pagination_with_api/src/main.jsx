import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProviders } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProviders>
    <App />
  </ContextProviders>
);
