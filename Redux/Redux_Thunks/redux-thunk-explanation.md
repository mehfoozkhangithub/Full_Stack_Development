# Redux Thunk Explanation

## 🔹 1. The Problem Redux Thunk Solves

Redux by itself can only handle **synchronous actions**.\
For example:

``` js
// Synchronous action
const increment = () => {
  return { type: "INCREMENT" };
};
```

This works fine if you just want to update state instantly.\
But what if you need to:

-   Fetch data from an API (async)
-   Wait for a response
-   Dispatch actions based on success or failure

Redux **does not allow async code directly in actions**. That's where
**Thunk** comes in.

------------------------------------------------------------------------

## 🔹 2. What is Redux Thunk?

-   **Thunk** is a middleware for Redux.
-   Middleware means it sits **between dispatching an action** and **the
    moment it reaches the reducer**.
-   Normally, Redux actions must be plain objects
    (`{ type: "SOMETHING" }`).
-   With Thunk, you can also dispatch **functions** instead of just
    objects.

👉 This function receives `dispatch` and `getState` as arguments so you
can: - Run asynchronous logic - Dispatch multiple actions (before,
during, and after async work)

------------------------------------------------------------------------

## 🔹 3. Analogy

Think of **Redux** like a restaurant: - **Actions** = Orders placed by
the customer\
- **Reducers** = The kitchen making food instantly based on orders\
- **Store** = The restaurant that keeps track of all orders and meals

But sometimes the food takes **time to cook** (async task like API
calls).\
Redux **alone** can't handle waiting.\
Redux Thunk acts like a **waiter** who: 1. Takes the order (dispatch
initial action: `LOADING`). 2. Goes to the kitchen and waits until food
is ready (API call). 3. Brings success or failure back to the customer
(dispatch `SUCCESS` or `ERROR`).

------------------------------------------------------------------------

## 🔹 4. Basic Example (Sync vs Async)

### Without Thunk (only sync)

``` js
const buyCake = () => {
  return { type: "BUY_CAKE" };
};

store.dispatch(buyCake()); // Works only if it's immediate
```

### With Thunk (async allowed)

``` js
const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
    }
  };
};
```

Notice how instead of returning an **object**, we return a **function**.

------------------------------------------------------------------------

## 🔹 5. Setup Redux Thunk

Install:

``` bash
npm install redux-thunk
```

Configure store:

``` js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

Now Redux can handle both **plain object actions** and **function
actions**.

------------------------------------------------------------------------

## 🔹 6. Full Example with Reducer + Action + Component

### actions.js

``` js
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
    }
  };
};
```

### reducer.js

``` js
const initialState = {
  loading: false,
  users: [],
  error: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { loading: false, users: action.payload, error: "" };
    case "FETCH_USERS_FAILURE":
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};
```

### store.js

``` js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";

export const store = createStore(userReducer, applyMiddleware(thunk));
```

### Component.jsx

``` jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./actions";

const UserList = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

------------------------------------------------------------------------

## 🔹 7. Key Takeaways

1.  **Redux Thunk = Middleware that lets actions be functions.**
2.  Helps with **async logic** (API calls, delays, multiple dispatches).
3.  Gives access to **dispatch** and **getState** inside the function.
4.  Common pattern:
    -   Dispatch `"REQUEST"` before API call.\
    -   Dispatch `"SUCCESS"` on response.\
    -   Dispatch `"FAILURE"` on error.
