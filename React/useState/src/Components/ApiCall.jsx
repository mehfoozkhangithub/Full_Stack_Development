import React, { useEffect } from 'react';

const apiCalls = async (a) => {
  try {
    let res = await fetch(a);
    let dataFetch = await res.json();
    console.log(' dataFetch:', dataFetch);
  } catch (err) {
    console.error(' err:', err);
  }
};
const apiCallss = async (b) => {
  try {
    let res = await fetch(b);
    let dataFetch = await res.json();
    console.log(' dataFetch:', dataFetch);
  } catch (err) {
    console.error(' err:', err);
  }
};

export const ApiCall = () => {
  const api = `https://jsonplaceholder.typicode.com/todos`;
  const api1 = `https://jsonplaceholder.typicode.com/todos`;

  const [count, setCount] = React.useState([]); // temp Local Storage

  // api call

  //   useEffect(() => {}, []);

  //# without Dependency
  useEffect(() => {
    apiCalls(api);
    apiCallss(api1);
  });
  // $ no Dependency
  useEffect(() => {
    console.log('no dependency');
  });

  // if we give empty dependency it will render/mount once.
  useEffect(() => {
    console.log('empty dependency');
  }, []);

  //  when we have the dependency change on the varibale/components it will re-mount/re-render
  useEffect(() => {
    console.log('dependency varible with count');
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>click me</button>
      <h1>{count}</h1>
    </>
  );
};
