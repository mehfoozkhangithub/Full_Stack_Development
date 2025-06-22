import React from 'react';

export const Card = ({
  name = 'Not Provide',
  age = 'not given',
  email = 'not specify',
}) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          border: '1px solid red',
          height: '200px',
          width: '200px',
        }}
      >
        <h2>{name} </h2>
        <h4> email:{email}</h4>
        <h5>age:{age}</h5>
      </div>
    </>
  );
};
