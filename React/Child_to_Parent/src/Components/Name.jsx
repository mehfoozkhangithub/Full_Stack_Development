import React from 'react';

export const Name = ({ props }) => {
  return (
    <>
      <h1>child compo</h1>
      <input type="text" onChange={(e) => props.showName(e)} />
    </>
  );
};
