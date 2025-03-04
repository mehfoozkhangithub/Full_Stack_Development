import React from "react";
import axios from "axios";

const getData = async (api) => {
  /*
  fetch(api)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
*/
  /*
  try {
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
    */

  try {
    let respond = await axios.get(api);
    console.log(respond.data);
  } catch (error) {
    console.log(error);
  }
};

export const ApiCall = () => {
  let url = "https://jsonplaceholder.typicode.com/todos";

  React.useEffect(() => {
    getData(url);
  });
  return (
    <>
      <h1>apiCall</h1>
    </>
  );
};

// hello axios
