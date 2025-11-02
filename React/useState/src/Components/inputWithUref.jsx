import React, { useRef } from 'react';

export const InputWithUref = () => {
  const RefData = useRef(null);

  const handleInput = () => {
    let value = RefData.current.value;
    console.log(' value:', value);
  };

  return (
    <>
      <input type="text" placeholder="enter the value..." ref={RefData} />
      <button onClick={handleInput}>submit</button>
    </>
  );
};
