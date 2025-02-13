/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

export const Dummy = React.memo(({ toggle, setToggle }) => {
  React.useEffect(() => {
    let id = setInterval(() => {
      console.log("Interval time", Date.now());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <>
      <button onClick={setToggle} className="toggle">
        Toggel
      </button>
    </>
  );
});
