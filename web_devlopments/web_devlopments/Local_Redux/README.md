## Counter redux

### `packages`

> npm install redux react-redux

# steps

### folder

        - src
            - components
                - counter.jsx
            - app
                - store.js
            - reducer
                - Action.js
                - Reducer.js

1. create store and setup with the **_legacyCreateStore_**

```js
import { legacy_createStore } from 'redux';

import { myOwnReducer } from '../Reducer/Reducer';

export const myOwnStore = legacy_createStore(myOwnReducer);
```

2. create **`reducer`** file and inside that fill with the logic of the counter application..

```js
import * as types from './Action';

const initialValue = { count: 0 };

export const myOwnReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
```

3. create **`action`** and inside that use this code

```js
export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
```

4. **_`Counter App`_**

```js
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as types from '../Reducer/Action';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.count);

  //   console.log('🚀 ~ value:', value);

  const handleInc = () => {
    dispatch({ type: types.INCREMENT });
  };

  const handleDec = () => {
    dispatch({ type: types.DECREMENT });
  };

  return (
    <>
      <h1>Counter {value}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </>
  );
};
```

5. we have to setup the environment for **react-redux**

```js
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { myOwnStore } from './App/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={myOwnStore}>
    <App />
  </Provider>
);
```

## Todos

1. routes -> browser-route
2. auth -> reqres.com/.in
3. token -> localStorage
4. todos
   - action
   - reducer
   - store setup with combine reducer

# setup

- state
- main
- reducer
-
