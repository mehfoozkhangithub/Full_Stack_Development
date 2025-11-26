# Redux + Redux-Thunk Practice Tasks

Below are pure **build-only** tasks.
No theory, no explanation, no code — only practical implementation requirements.

---

## 1️⃣ Async Todo Loader

- Load todos from an API using a thunk.
- Show loading while fetching.
- Handle failure with an error UI.
- Allow deleting a todo using another thunk.

---

## 2️⃣ Product Cart With Delayed Actions

- Add product using a thunk that delays by 2 seconds.
- Remove product after API confirmation (via another thunk).
- Show per-item loading spinner.

---

## 3️⃣ Weather App With Retry Logic

- Fetch weather using a thunk.
- If request fails, retry 2 more times automatically.
- Store attempt count in Redux.

---

## 4️⃣ Login Flow Using Thunks

- Login thunk sends username/password to an API.
- On success, store token.
- On failure, show error and allow retry.
- Logout clears Redux state.

---

## 5️⃣ Pagination System

- Fetch a list using a thunk with a page number.
- Next/Prev buttons trigger thunks.
- Store current page, total pages, and items.

---

## 6️⃣ Notification System

- Thunk fetches notifications.
- Store unread count.
- Thunk marks a notification as read.

---

## 7️⃣ Search With Debounce

- User typing triggers thunk after 500ms.
- Cancel previous pending request if typing again.
- Store results + loading in Redux.

---

## 8️⃣ Multi-API Dashboard

- Thunk fetches 3 APIs in parallel.
- Store results in separate slices.
- Show loading only when all APIs are pending.

---

## 9️⃣ Upload Progress Tracker

- Thunk uploads a file (timed simulation).
- Update Redux progress every 10%.
- Display a progress bar connected to Redux.

---

## 🔟 Dark Mode With Server Sync

- Toggle theme → dispatch thunk to update on server.
- Update Redux only after server confirmation.
- Revert toggle on server failure.

---
