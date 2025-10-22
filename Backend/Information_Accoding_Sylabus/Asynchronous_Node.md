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

- somethig
