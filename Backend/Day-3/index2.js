const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello home page...");
  } else if (req.url == "/notes") {
    // just to explain we have to write the chunk of the code
    res.write("here we have the value of the something.");
    res.write("here we have some data.");
    res.write("here we have blog.");
    res.write("here we have infomation");
    res.write("here we have sensitive data");
    res.end();
    // here we just understanding why we use end() in this program.
  }
});

server.listen(port, () => {
  console.log("server running on", port);
});
