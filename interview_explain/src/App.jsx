import "./App.css";
import Explain_hooks from "./Explain_hooks";
import { useEffect, useState } from "react";
import MainRouts from "./mainRouts";

function App() {
  const [toggle, setToggle] = useState(true);

  let url = "https://jsonplaceholder.typicode.com/users"; //api

  const getApi = () => {
    return console.log(fetch(url));
    // .then((res) => res)
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));

    // try {
    //   const apiFetch = await fetch(url);
    //   const Data = await apiFetch.json();
    //   console.log("Data", Data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <MainRouts />
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle ? <Explain_hooks /> : ""}
    </>
  );
}

export default App;
