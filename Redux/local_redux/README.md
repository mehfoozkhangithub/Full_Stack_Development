🔹 1. What is compose?

In Redux (and functional programming in general),
compose is a utility function that lets you combine multiple functions into one.

Its definition (simplified) looks like this:

```js
function compose(...funcs) {
  if (funcs.length === 0) return (arg) => arg;
  if (funcs.length === 1) return funcs[0];
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
```

### example 2

```js
const add = (x) => x + 2;
const multiply = (x) => x * 3;

const compose = (a, b) => (value) => a(b(value));

const combined = compose(add, multiply);
console.log(combined(5)); // add(multiply(5)) → add(15) → 17
```

### 4. shallowEqual

This is an optimization function provided by React-Redux.

Normally, useSelector checks if the returned value has changed using strict equality (===).

But when you return an object like { isAuth, isLoading, isError }, that object is new every render — so React would think it changed and re-render every time.

shallowEqual prevents that by checking only the keys and primitive values inside the object — not the reference.

So it says:

“Only re-render if one of the inner values actually changed.”

✅ This avoids unnecessary re-renders and improves performance.
