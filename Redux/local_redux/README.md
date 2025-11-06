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
