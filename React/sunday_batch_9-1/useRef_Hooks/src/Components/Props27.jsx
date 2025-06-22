import React from 'react';

// Function component with props
const Props27 = (props) => {
  console.log('-> props.name:', props.name);
  console.log('-> props.age:', props.age);

  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
};

// Default props
Props27.defaultProps = {
  name: 'Guest',
  age: 'Unknown',
};

export default Props27;
