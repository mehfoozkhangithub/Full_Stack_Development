# React + Vite

### batch sunday i explain this code

```jsx
// this is app.jsx

// import { useState } from 'react';
import './App.css';
// import { Parent } from './components/Parent';
import { Child } from './components/Child';
function App() {
  // const [inputValue, setValue] = useState('');

  let nums = 30;

  /*   const handleInput = () => {
    const valuesById = document.querySelector('#input-val').value;
    console.log(' valuesById:', valuesById);
  }; */

  return (
    <>
      <h1>hello</h1>
      {/*  this is basic js logic getting the input value */}
      {/* <input type="text" id="input-val" /> */}
      {/*  now we are getting the value by hooks */}
      <input
        type="text"
        // value={inputValue}
        // onChange={(event) => console.log(event.target.value)}
        // onChange={(event) => setValue(event.target.value)}
      />
      {/* <Parent props={nums} /> */}
      <Child number={nums} />
    </>
  );
}

export default App;
```

```jsx
// this is child.jsx page

import React from 'react';

export const Child = ({ number }) => {
  console.log(' props:', number);
  return (
    <>
      <h1>child components {number}</h1>
    </>
  );
};
```

```jsx
//  this is the page of Parent.jsx

import { Child } from './Child';

export const Parent = (props) => {
  return (
    <>
      <Child greet={props} />
    </>
  );
};

/* 
how to crate default export short-cut 

normal function components -> rfce

arrow function compoents-> rafce

how to create name function export short-cut

normal function components -> rfce

arrow function components -> rafc

*/
```

```jsx

```
