## 🌐 Server in Node.js

🧠 **What is a Server?**

_A server is a computer or program that listens for requests from clients (like browsers, mobile apps, or APIs) and responds with data._

For example:

- Browser requests → http://localhost:3000

- Node.js server responds → “Hello World”

⚙️ Creating a Basic Server

✅ Step 1: Import the `http` module

> Node.js has a built-in module called `http` that allows us to create servers.

```js
const http = require('http');
```

✅ Step 2: Create the server

_We use `http.createServer()` to make a server.
It takes a callback function with two parameters:_

- `req` → request (contains info like URL, method, headers)

- `res` → response (used to send data back to the client)

```js
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is my Node.js server!');
});
```

✅ Step 3: Listen on a port

To make the server accessible, it must listen on a specific port (like 3000).

```js
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

➡️ Run the file:

```bash
node server.js
```

- Open your browser and visit:

```t
http://localhost:9000
```

- You'll see this:-

```txt
Hello, this is my Node.js server!
```

📦 Serving Different Routes

_You can respond differently based on the URL path:_

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to Home Page');
  } else if (req.url === '/about') {
    res.write('About Page');
  } else {
    res.writeHead(404);
    res.write('404 Page Not Found');
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

🧩 Try visiting:

- `/` → Welcome to Home Page

- `/about` → About Page

- `/xyz` → 404 Page Not Found

🌐 Serving HTML instead of plain text

_You can serve HTML content by setting content-type to text/html:_

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>Hello from Node.js Server</h1>
    <p>This is a simple web page served using Node.js</p>
  `);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

🧰 Example: Simple HTTP Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

##### ⚡ Key Points to Remember

| Concept               | Description                      |
| --------------------- | -------------------------------- |
| `http.createServer()` | Creates the server               |
| `req` (Request)       | Incoming data from client        |
| `res` (Response)      | What we send back                |
| `res.writeHead()`     | Set HTTP status code and headers |
| `res.end()`           | End the response                 |
| `server.listen(port)` | Start listening for requests     |

##### 🚀 Summary

| Step | Description        | Code                                  |
| ---- | ------------------ | ------------------------------------- |
| 1️⃣   | Import http module | `const http = require('http')`        |
| 2️⃣   | Create server      | `http.createServer((req, res) => {})` |
| 3️⃣   | Listen on port     | `server.listen(3000)`                 |
| 4️⃣   | Respond to routes  | Use `req.url`                         |
