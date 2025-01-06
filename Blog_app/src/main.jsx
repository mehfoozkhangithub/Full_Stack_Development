import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./App/Store.jsx";
import Index from "./Preactice/index.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      {/* <Index /> */}
    </Provider>
  </>
);
