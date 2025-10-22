### ⚡ Asynchronous Node.js

##### 🧠 What Does “Asynchronous” Mean?

**Asynchronous** means that Node.js can execute multiple tasks **at the same time** without waiting for one to finish before starting another.

In simpler words:

Node.js **doesn’t block** the rest of the code while waiting for something slow (like reading a file or fetching data from a database).

##### 🧩 Synchronous vs Asynchronous Example

🕒 Synchronous (Blocking)

```js
const fs = require('fs');

console.log('Start');

const data = fs.readFileSync('demo.txt', 'utf8');
console.log(data);

console.log('End');
```

🧠 Output:

```sql
Start
<contents of demo.txt>
End

```

👉 The code waits until the file is completely read before moving on.

⚡ Asynchronous (Non-Blocking)

```js
const fs = require('fs');

console.log('Start');

fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

console.log('End');
```

🧠 Output:

```sql
Start
End
<contents of demo.txt>
```

👉 Node.js **doesn’t wait** for the file to read — it continues running the next lines.

##### 🧱 How Node.js Handles Asynchronous Code

Node.js runs JavaScript using a **single thread**, but it uses something called the **Event Loop** to handle multiple tasks concurrently.

⚙️ The Event Loop Handles:

- File operations (`fs`)

- Network requests

- Database queries

- Timers (`setTimeout`, `setInterval`)

So Node.js delegates slow tasks to the system (like reading a file), and when the result is ready, the callback runs.

🔄 Example: Asynchronous with setTimeout

```js
console.log('Task 1');

setTimeout(() => {
  console.log('Task 2 (after 2 seconds)');
}, 2000);

console.log('Task 3');
```

🧠 Output:

```bash
Task 1
Task 3
Task 2 (after 2 seconds)
```

⏳ Node.js does not wait for setTimeout() to finish — it moves on.

🧰 Common Ways to Handle Asynchronous Code

1️⃣ Callbacks
A function passed into another function to run later.

```js
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received!');
  }, 2000);
}

fetchData((message) => {
  console.log(message);
});
```

⚠️ Problem: **Callback Hell** (too many nested callbacks)

2️⃣ Promises
Promises represent a future value (something that will finish later).

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received!');
  }, 2000);
});

fetchData.then((msg) => console.log(msg));
```

✅ Easier to read
❌ Still needs **.then()** chaining

3️⃣ Async / Await

Syntactic sugar over Promises — makes asynchronous code look synchronous.

```js
const getData = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve('Data received!'), 2000);
  });
  console.log(data);
};

getData();
```

🧠 Output:

````bash

```bash
Data received!
````

✅ Clean and readable
✅ No callback hell

🔁 Real Example: Async File Read

```js
const fs = require('fs').promises;

const readFile = async () => {
  try {
    const data = await fs.readFile('demo.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readFile();
```

⚡ Why Node.js Is Fast

| Feature                    | Description                         |
| -------------------------- | ----------------------------------- |
| 🧵 **Single-threaded**     | One main thread handles all code    |
| 🔄 **Event Loop**          | Keeps the app responsive            |
| 🧱 **Non-blocking I/O**    | Does not wait for slow operations   |
| 💬 **Asynchronous nature** | Executes multiple tasks efficiently |

🧠 Summary
| Concept | Description | Example |
| ---------------- | --------------------------------- | ------------------------- |
| **Synchronous** | Executes one task at a time | `fs.readFileSync()` |
| **Asynchronous** | Executes multiple tasks together | `fs.readFile()` |
| **Callback** | Function runs after task finishes | `readFile(..., callback)` |
| **Promise** | Represents future value | `.then()` |
| **Async/Await** | Cleaner way to handle async code | `await fs.readFile()` |
