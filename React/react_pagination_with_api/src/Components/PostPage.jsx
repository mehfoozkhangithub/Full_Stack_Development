import React from 'react';
import ContextApiFile from '../Context/Context';
import axios from 'axios';

export const PostPage = () => {
  const [pageCount, setPageCount] = React.useState(null);
  const showContext = React.useContext(ContextApiFile);
  console.log('showContext', showContext);

  const fetchData = async () => {
    try {
      let Response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${pageCount}&_page=${showContext.page}`
      );

      // Access headers from the response
      const headers = Response.headers;

      // Example: Get a specific header value (e.g., "content-type")
      let totalCount = headers['x-total-count'];
      let totalCounts = +totalCount; //convert into number
      if (totalCounts) setPageCount(Math.ceil(totalCounts / 10));

      let dataValue = await Response.data;
      showContext.setStore(dataValue);
    } catch (err) {
      console.log('err', err);
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
        disabled={showContext.page === pageCount}
        onClick={() => {
          showContext.setPage(showContext.page + 1);
        }}
      >
        Next
      </button>
    </>
  );
};
