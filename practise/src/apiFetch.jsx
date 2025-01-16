import { useEffect, useState } from "react";
import "./App.css";

function apiFetch() {
  const [data, setData] = useState([]); // useState hook

  let api = "https://jsonplaceholder.typicode.com/users"; //api

  const getData = async () => {
    //we are fetching the data and seting the data with the help of promises.
    //! .then.catch methods
    // return fetch(api)
    //   .then((res) => res.json())
    //   .then((res) => setData(res))
    //   .catch((err) => console.log(err));

    //! try catch methods

    try {
      let apiData = await fetch(api);
      let finalData = await apiData.json();
      // console.log(finalData);
      setData(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  useEffect(() => {
    // useEffect hook
    // we are re-mounting the react while get the data after fetching
    getData();
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default apiFetch;
