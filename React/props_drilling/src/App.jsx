import React from 'react';
import './App.css'

import { Child } from './components/Child';

export function Parent() {
  let [count, setCount] = React.useState(0)

  return (
    <>
      <h1>parent</h1>
      <Child counts={count} incFunc={setCount} />
    </>
  )
}

