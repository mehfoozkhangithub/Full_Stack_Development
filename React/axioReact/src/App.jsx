import "./App.css";
import { Todos } from "./Components/Todos";
import { ApiCall } from "./Components/ApiCall";

function App() {
  return (
    <>
      <ApiCall />
      <Todos />
    </>
  );
}

export default App;
