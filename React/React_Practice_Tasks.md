
# 🎯 React Interview Practice Tasks (Beginner to Advanced)

A comprehensive list of **30 React interview-style practice tasks** designed to strengthen your skills — from basic hooks to advanced state management and API handling.

---

## 🟢 Beginner-Level (Basics & Hooks)

### 1. Counter App with Step Control
- Create a counter.
- Add an input to set the step value (e.g., +2 or -3).
🧠 *Concepts:* useState, controlled input, event handling.

### 2. Toggle Visibility
- Button toggles visibility of a paragraph (`Show/Hide`).
🧠 *Concepts:* conditional rendering.

### 3. Character Counter
- Input field shows live character count.
- Limit text to 100 chars.
🧠 *Concepts:* state, input control.

### 4. Random Quote Generator
- Show a random quote from an array each time a button is clicked.
🧠 *Concepts:* randomization, state updates.

### 5. Color Picker
- Use `<input type="color" />` to pick a color and display it in a box.
🧠 *Concepts:* props, controlled inputs.

### 6. Temperature Converter
- Convert Celsius ↔ Fahrenheit.
🧠 *Concepts:* two-way binding, derived state.

### 7. Countdown Timer
- Start a 10-second countdown when clicking “Start”.
🧠 *Concepts:* useEffect, timers.

### 8. Accordion Component
- Expand/collapse sections with click.
🧠 *Concepts:* state management, conditional rendering.

### 9. Tab Navigation
- Create three tabs (Home, About, Contact).
- Only show the active tab’s content.
🧠 *Concepts:* mapping, dynamic rendering.

### 10. Stopwatch
- Start, Stop, and Reset stopwatch.
🧠 *Concepts:* useEffect with setInterval, cleanup functions.

---

## 🟡 Intermediate-Level (APIs, Forms, State)

### 11. Todo App with Local Storage
- Add, complete, delete todos.
- Persist in localStorage.
🧠 *Concepts:* useEffect, CRUD, persistence.

### 12. Product List with Filter and Sort
- Fetch products from a mock API.
- Add category filter and price sorting.
🧠 *Concepts:* array methods, API fetching.

### 13. Infinite Scroll List
- Load more items when scrolling to bottom.
🧠 *Concepts:* scroll event handling, pagination.

### 14. Image Gallery
- Show a grid of images.
- Click to open a modal with full-size image.
🧠 *Concepts:* modal, props, mapping.

### 15. Expense Tracker
- Add income/expense entries.
- Show total balance dynamically.
🧠 *Concepts:* useReducer, list management.

### 16. Form Validation with Error Messages
- Validate inputs: email format, required fields, password length.
🧠 *Concepts:* controlled form, validation logic.

### 17. Live Search (Debounce)
- Search users from API with 300ms delay (debounce).
🧠 *Concepts:* useEffect, useRef, API, debounce.

### 18. Light/Dark Theme Switcher
- Toggle theme globally and save preference.
🧠 *Concepts:* useContext, localStorage.

### 19. Custom Hook for Fetching Data
- Create a `useFetch(url)` hook that returns `{data, loading, error}`.
🧠 *Concepts:* custom hooks, async useEffect.

### 20. Scroll to Top Button
- Show a “⬆️” button when user scrolls down 200px.
- Smooth scroll to top.
🧠 *Concepts:* event listeners, conditional rendering.

---

## 🔴 Advanced-Level (Architecture, Context, Optimization)

### 21. Authentication Flow (Mock)
- Login form → show dashboard after successful login.
- Store auth state using Context API.
🧠 *Concepts:* context, routing, protected routes.

### 22. Shopping Cart
- Add/remove products from cart.
- Show total price.
🧠 *Concepts:* global state, useReducer or Context.

### 23. Weather App with Search
- Use OpenWeather API.
- Show city weather, temperature, humidity.
🧠 *Concepts:* API handling, conditional rendering.

### 24. Notes App (CRUD + Search)
- Add, edit, delete, and search notes.
🧠 *Concepts:* CRUD, filtering, component structure.

### 25. File Upload Preview
- Upload an image and show preview.
🧠 *Concepts:* FileReader API, controlled inputs.

### 26. Dashboard with Charts
- Use `recharts` or `chart.js` to visualize data.
🧠 *Concepts:* library integration, props.

### 27. Multi-Step Form
- Step 1: Personal info → Step 2: Address → Step 3: Review.
🧠 *Concepts:* conditional rendering, form state.

### 28. Notifications System
- Show temporary alerts (auto-dismiss after 3 sec).
🧠 *Concepts:* timeout, context for global notifications.

### 29. Drag and Drop List
- Reorder list items using drag & drop.
🧠 *Concepts:* drag events or libraries like `react-beautiful-dnd`.

### 30. Realtime Chat (Mock)
- Display chat messages between two users.
- Simulate message sending with useEffect intervals.
🧠 *Concepts:* component updates, message state.

---

💡 **Tip:** Start with 2–3 tasks from each level and push them to GitHub — they make great portfolio projects and show practical React knowledge.
