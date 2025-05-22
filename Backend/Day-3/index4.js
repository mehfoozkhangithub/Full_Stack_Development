const http = require("http");
const fs = require("fs");
const port = 8000;

const server = http.createServer((request, response) => {
  // console.log(request, "this is request");
  //below this code was storing the data in ram and then respond to client.
  if (request.url === "/addData" && request.method === "POST") {
    let str = "";
    request.on("data", (chunk) => {
      str += chunk;
    });
    request.on("end", () => {
      console.log(str);
    });
    response.end("I got your data...");
  }

  // here we are streming the data without storing direct to client.
  else if (request.url === "/movies") {
    const movieStream = fs.createReadStream("../Day-1/leactur.txt", {
      encoding: "utf-8",
    });
    movieStream.pipe(response);
  }
});

server.listen(port, () => {
  console.log("server is running on", port);
});
