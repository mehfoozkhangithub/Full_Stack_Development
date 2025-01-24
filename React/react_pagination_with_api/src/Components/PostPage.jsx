import React from "react";
import ContextApiFile from "../Context/Context";
import axios, { AxiosHeaders } from "axios";

export const PostPage = () => {
  const showContext = React.useContext(ContextApiFile);
  console.log("showContext", showContext);
  console.log("showContext", showContext.store.id);

  const fetchData = async () => {
    try {
      let Response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${showContext.page}`
      );
      let dataValue = await Response.data;
      showContext.setStore(dataValue);
    } catch (err) {
      console.log("err", err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [showContext.page]);

  return (
    <>
      {showContext.store.map((el) => (
        <div key={el.id}>
          {el.id} - {el.title}
        </div>
      ))}

      <button
        disabled={showContext.page === 1}
        onClick={() => {
          showContext.setPage(showContext.page - 1);
        }}
      >
        Prev
      </button>
      <button>{showContext.page}</button>
      <button
        disabled={showContext.store.id <= 100}
        onClick={() => {
          showContext.setPage(showContext.page + 1);
        }}
      >
        Next
      </button>
    </>
  );
};
