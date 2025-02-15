import { useEffect } from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";
import axios from "axios";
import { dataFetch } from "./Features/FetchSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  const apiFetchResult = useSelector((state) => state.api);
  console.log(apiFetchResult);

  const dispatch = useDispatch();
  const api = async () => {
    try {
      const res = await axios.get(url);
      dispatch(dataFetch(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
