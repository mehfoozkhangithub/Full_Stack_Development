### 🟢 1. Installation and Setup of Node.js

🔧 Step 1: Download Node.js

- Go to https://nodejs.org

- You’ll see two versions:

- LTS (Long Term Support): Stable version (recommended)

- Current: Latest features, may be experimental
  ✅ Choose LTS for most cases.

🖥️ Step 2: Install Node.js

- Run the downloaded installer.

- Keep all default settings checked (especially Add to PATH).

- Finish installation.

🧩 Step 3: Verify Installation

Open your terminal or command prompt and type:

```bash
node -v
```

👉 Shows Node.js version

_Example_: `v20.12.1`

- Then check npm (Node Package Manager):

```bash
npm -v
```

_Example_: `v10.8.2`

### 💡 2. Fundamentals of Node.js

🧠 **What is Node.js?**

_Node.js is a runtime environment that allows you to run JavaScript outside the browser — for example, on your computer or a server._

_It uses the V8 JavaScript Engine (same as Google Chrome)._

⚙️ **Why Node.js?**

- Runs JavaScript on the server-side

- Asynchronous (non-blocking I/O)

- Very fast and lightweight

- Uses npm for installing third-party packages

⚡ Example: Hello World in Node.js

```js
// app.js
console.log('Hello, Node.js!');
```

**Run it in terminal:**

```bash
node app.js
```

🧵 Event-Driven Architecture

**_Node.js is event-driven, meaning it listens for events and responds asynchronously._**

Example:

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
console.log('Reading file...');
```

💬 Output:

```txt
Reading file...  --> this come first
<file content here> --> and then come the contant.
```

➡️ Node.js doesn’t wait for the file to read — it continues running other code.

### 🧱 3. Core Modules in Node.js

Node.js has built-in modules that you can use without installing anything.

| Core Module | Description                     | Example               |
| ----------- | ------------------------------- | --------------------- |
| **fs**      | File System – read/write files  | `fs.readFileSync()`   |
| **http**    | Create web servers              | `http.createServer()` |
| **path**    | Handle file and directory paths | `path.join()`         |
| **os**      | Info about operating system     | `os.platform()`       |
| **url**     | Parse and format URLs           | `url.parse()`         |
| **events**  | Work with events                | `EventEmitter` class  |
