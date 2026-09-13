import React from 'react';
import { Name } from './components/Name.jsx';

export const App = () => {
  const [text, setText] = React.useState('');

  const showName = (e) => {
    setText(e.target.value);
    console.log('this is parent compo console', text);
  };
  return (
    <>
      <h1>parent compo {text}</h1>
      <hr />
      <Name props={{ showName }} />
    </>
  );
};
