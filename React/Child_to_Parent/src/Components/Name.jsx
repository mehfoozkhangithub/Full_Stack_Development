import React from 'react';

export const Name = ({ showName }) => {
  const handleText = (e) => {
    showName(e);
  };
  return (
    <>
      <h1>child compo</h1>
      <input type="text" onChange={(e) => handleText} />
    </>
  );
};
