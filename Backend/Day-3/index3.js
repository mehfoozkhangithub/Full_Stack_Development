const http = require("http");
const fs = require("fs");

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // first steps
    // res.end("hello home page...");
    // this is second step
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Hey we have the value!</h1>");
  } else if (req.url == "/notes") {
    // just to explain we have to write the chunk of the code
    res.write("here we ha ve the value of the something.");
    res.end();
  } else if (req.url === "/note") {
    fs.readFile("./index2.js", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.end(err);
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("Invalid API endpoints, Please refer API docs...");
  }
});

server.listen(port, () => {
  console.log("server running on", port);
});
