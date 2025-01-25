import React from "react";

function Child() {
  const [count, setCount] = React.useState(5);

  // * this is useEffect we handel first explain this
  // React.useEffect(() => {
  //   setInterval(() => {
  //     console.log("callBack function invoke");
  //     setCount(count - 1);
  //   }, 1000);
  // }, []);

  // ? this is useEffect we handel second explain this
  // React.useEffect(() => {
  //   setInterval(() => {
  //     console.log("callBack function invoke");
  //     setCount((prevCount) => prevCount - 1);
  //   }, 1000);
  // }, []);

  // ! last but not he least explain final explaination
  React.useEffect(() => {
    let IntervalId = setInterval(() => {
      console.log("callBack function invoke");
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(IntervalId);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  }, []);

  return (
    <>
      <h1>Count:{count}</h1>
    </>
  );
}
export default Child;
