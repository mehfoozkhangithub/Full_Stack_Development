# React `Notes`

## ⚙️ 1. React – Features

| Feature                       | Definition                                                                                         | Example Code                                                                                                                                                                                                                                     |
| ----------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **JSX (JavaScript XML)**      | A syntax extension that allows writing HTML elements in JavaScript.                                | `jsx import React from "react";  function App() {   return <h1>Hello, JSX!</h1>; } export default App; `                                                                                                                                         |
| **Components**                | React apps are built using small, reusable pieces of UI called _components_.                       | `jsx function Welcome(props) {   return <h2>Hello, {props.name}</h2>; } export default Welcome; `                                                                                                                                                |
| **Virtual DOM**               | React uses a virtual representation of the DOM to efficiently update only changed parts of the UI. | _(No direct code; happens internally)_                                                                                                                                                                                                           |
| **One-way Data Binding**      | Data flows from parent → child components, making it easier to track changes.                      | `jsx function Child({ msg }) { return <p>{msg}</p>; } function Parent() { return <Child msg="Hello Child" />; } `                                                                                                                                |
| **Declarative UI**            | Describe what the UI should look like, and React takes care of how to render it.                   | `jsx const App = () => <button>Click Me</button>; `                                                                                                                                                                                              |
| **Lifecycle Methods / Hooks** | React provides functions like `useEffect`, `useState` to manage side effects and state.            | `jsx import { useState, useEffect } from "react"; function Counter() {   const [count, setCount] = useState(0);   useEffect(() => console.log(count), [count]);   return <button onClick={() => setCount(count + 1)}>Click {count}</button>; } ` |

## 🚀 2. React – Advantages

| Advantage                         | Explanation                                                                   | Example                       |
| --------------------------------- | ----------------------------------------------------------------------------- | ----------------------------- |
| **Reusable Components**           | You can use the same component multiple times in different parts of your app. | `jsx <Button /> <Button /> `  |
| **Fast Rendering**                | Virtual DOM improves performance by updating only changed parts.              | (Handled internally by React) |
| **Easy to Learn and Use**         | Simple syntax (JSX + JavaScript).                                             |                               |
| **Strong Community Support**      | Backed by Meta (Facebook) + open source community.                            |                               |
| **SEO Friendly (with SSR)**       | Using tools like _Next.js_, React apps can be optimized for SEO.              |                               |
| **Cross-Platform (React Native)** | You can build web + mobile apps using the same React knowledge.               |                               |

## ⚠️ 3. React – Limitations

| Limitation                         | Explanation                                                                                            | Example / Note                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| **JSX as a barrier**               | Beginners might find JSX syntax confusing at first.                                                    | JSX looks like HTML but runs in JS.                            |
| **Fast changes in React versions** | Frequent updates can make older tutorials outdated.                                                    | Need to keep learning new Hooks, APIs.                         |
| **View Layer Only**                | React only handles UI (View); you need extra libraries like Redux or Context API for state management. | `jsx // Need external tools for large-scale state management ` |
| **SEO Challenges (in SPA)**        | Without SSR (Server Side Rendering), bots may not index all pages.                                     | Solved using _Next.js_.                                        |
| **Boilerplate Code**               | Setting up routing, state, and configurations needs extra libraries.                                   | React Router, Redux, etc.                                      |
