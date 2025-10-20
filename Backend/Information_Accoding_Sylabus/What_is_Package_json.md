### Package.json

🧠 **What is `package.json`?**

_`package.json` is the heart of any Node.js project.
It contains project metadata **(like name, version, author) and manages dependencies (packages your app needs).**_

##### ⚙️ Creating package.json

- In your project folder, open terminal and run:

```bash
npm init
```

- You’ll be asked a few questions (project name, version, author, etc.)

- Or you can skip questions and auto-generate:

```bash
npm init -y
```

This creates a file named `package.json`, like this:

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A demo Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {}
}
```

| Purpose               | Example                                                       |
| --------------------- | ------------------------------------------------------------- |
| 🧱 Project Info       | Stores app name, version, author, etc.                        |
| 📦 Dependency Manager | Keeps list of installed packages                              |
| ⚙️ Scripts            | Run commands easily (`npm start`, `npm test`)                 |
| 🔄 Version Control    | Other developers can install dependencies using `npm install` |

✅ Installing Packages

When you install something using `npm install`, it automatically updates your `package.json`.

```bash
npm install express
```

Then you’ll see:

```json
"dependencies": {
  "express": "^4.19.2"
}
```

To reinstall all dependencies (on another computer), just run:

```bash
npm install
```

### 🔁 2. Nodemon in Node.js

##### ⚙️ What is Nodemon?

_Nodemon is a **development tool** that automatically **restarts your Node.js server** whenever you make file changes._

No need to stop and re-run `node server.js` every time!

##### 🧩 Install Nodemon

✅ Option 1: Install globally

```bash
npm install -g nodemon
```

✅ Option 2: Install locally (recommended for projects)

```bash
npm install --save-dev nodemon
```

##### ⚙️ Use Nodemon

Run your app with:

```bash
nodemon server.js
```

Now, whenever you save a file, nodemon automatically restarts your server 🔁

##### 🧰 Add to package.json

You can add a script to make it easier:

```json

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

```

Then just run:

```bash
npm run dev
```

### 🌐 3. API in Node.js

##### 🧠 What is an API?

**API (Application Programming Interface)** allows two systems to communicate.
In backend development, it usually means an **HTTP API (REST API)** that sends and receives data in **JSON** format.

Example:
Client → (GET request) → Server → (sends data back)

##### ⚙️ Creating a Simple API using Express.js

We’ll use the **Express** framework — the most popular Node.js library for building APIs.

Step 1:- Install Express

```bash
npm install express
```

Step 2:- Create `Server.js`

```js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET API (Read)
app.get('/', (req, res) => {
  res.send('Welcome to My Node.js API!');
});

// POST API (Create)
app.post('/user', (req, res) => {
  const data = req.body;
  res.json({ message: 'User created successfully!', user: data });
});

// PUT API (Update)
app.put('/user/:id', (req, res) => {
  res.json({ message: `User ${req.params.id} updated` });
});

// DELETE API (Delete)
app.delete('/user/:id', (req, res) => {
  res.json({ message: `User ${req.params.id} deleted` });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

##### 📊 Types of REST API Methods

| Method   | Purpose      | Example    |
| -------- | ------------ | ---------- |
| `GET`    | Fetch data   | `/users`   |
| `POST`   | Add new data | `/users`   |
| `PUT`    | Update data  | `/users/1` |
| `DELETE` | Remove data  | `/users/1` |

##### 🧠 Key Takeaways

| Concept        | Description                                           |
| -------------- | ----------------------------------------------------- |
| `package.json` | Manages your project info and dependencies            |
| `nodemon`      | Automatically restarts server on code changes         |
| `API`          | Interface for communication between client and server |
