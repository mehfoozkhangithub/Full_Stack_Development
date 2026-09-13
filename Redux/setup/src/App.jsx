import React from 'react';

import * as action from './Actions/Actions';
import { myStore } from './Store/Store';

export const App = () => {
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = myStore.subscribe(() => {
      setFlag((prev) => !prev);
    });

    return unsubscribe;
  }, []);

  console.log('rendering:', flag);
  console.log('count:', myStore.getState().count);

  return (
    <>
      <h1>Counter: {myStore.getState().count}</h1>

      <button onClick={() => myStore.dispatch(action.Increments)}>inc</button>

      <button onClick={() => myStore.dispatch(action.Decrements)}>dec</button>
    </>
  );
};
