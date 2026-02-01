import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { ContextComponents } from "./Context/Context_Components.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextComponents>
      <App />
    </ContextComponents>
  </BrowserRouter>
);
