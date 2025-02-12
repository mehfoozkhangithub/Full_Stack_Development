import React from "react";

export const Dummy = () => {
  const [toggle, setToggle] = React.useState(true);
  React.useEffect(() => {
    setInterval(() => {
      console.log("Interval time", Date.now());
    }, 1000);
  });
  return (
    <>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="toggle"
      >
        Toggel
      </button>
    </>
  );
};
