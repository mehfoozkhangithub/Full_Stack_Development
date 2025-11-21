# React useEffect & useRef Practice Questions (No Code)

## 🔵 useEffect Conceptual Practice Questions

### Basic Level

1.  You have a counter that increases on button click. You want the page
    title to update whenever the counter changes. Explain when the
    effect should run and why.
2.  A component needs to fetch data from an API only once on mount. What
    should the dependency array contain and why?
3.  You want to log a message only when the component unmounts. How does
    the cleanup function work?
4.  You want an effect to re-run only when a specific prop changes. What
    should be in the dependency array and why?
5.  You use useEffect without a dependency array. Explain what happens
    and why this may be risky.

### Intermediate Level

6.  A component has two states: `count` and `theme`. You want an effect
    to run only when `count` changes. Which state should be in the
    dependency array and why not the other?
7.  An API call inside useEffect triggers multiple times during
    development due to React strict mode. Why does this happen?
8.  A useEffect reads a value from state but uses the previous render's
    value. Why does this happen?
9.  How can a useEffect accidentally cause an infinite loop?
10. You want to sync state with localStorage. When should you read
    values and when should you write them using useEffect?

## 🔴 useRef Conceptual Practice Questions

### Basic Level

11. You want an input to auto-focus on page load. How does useRef allow
    this without re-rendering?
12. You want to store a value that changes but should not trigger
    re-renders. Why use useRef instead of useState?
13. A timer ID from `setInterval` must be stored. Why can't a normal
    variable inside the component store this reliably?

### Intermediate Level

14. You want to compare a previous prop value with the current one. How
    can useRef store the previous value?
15. You want to control a video element (play/pause). Why is a DOM
    reference required and how does useRef help?
16. You want to track how many times a component renders. How can useRef
    count renders without causing more renders?
17. You want to detect the last input field the user clicked. How does
    useRef help store this info without triggering updates?
18. You want to prevent a useEffect from running on the initial render
    but allow it on subsequent updates. How can useRef detect the first
    render?

## 🟣 Advanced Mixed useEffect + useRef Questions

19. You have a chat application that auto-scrolls to the bottom when new
    messages arrive, but should not auto-scroll if the user is scrolling
    upwards reading older messages. How do useEffect and useRef work
    together here?
20. A component listens to window resize events. Which logic requires
    useEffect and which requires useRef?
21. You want to debounce an input field using useEffect and useRef. How
    does useRef help prevent recreating timers on every render?
22. You want a WebSocket connection that persists across renders. Why
    should the socket instance be stored in a ref instead of state?
23. A form auto-saves data 1 second after user stops typing. Explain how
    useEffect detects the change and useRef stores the timeout.
24. You need to detect clicks outside a dropdown menu. How does a ref
    help identify DOM elements and how does useEffect help detect
    outside clicks?
