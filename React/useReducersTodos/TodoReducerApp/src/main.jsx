import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TodoContexrProviders } from "./Context/ContextsApi.jsx";

createRoot(document.getElementById("root")).render(
  <TodoContexrProviders>
    <App />
  </TodoContexrProviders>
);
