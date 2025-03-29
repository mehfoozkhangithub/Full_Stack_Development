const express = require("express");
const fs = require("fs");
const port = 9800;

const app = express();

app.use(express.json());

const watchman = (req, res, next) => {
  const startTime = new Date().getTime();
  req.body.server = "mehfooz is full stack dev";
  next();
  const endTime = new Date().getTime();
  console.log(endTime - startTime);
};

const logger = (req, res, next) => {
  fs.appendFileSync("./logs.txt", "\n" + req.method + "" + req.url, "utf-8");
  next();
};

app.use(watchman, logger);

app.get("/", (req, res) => {
  console.log("e");
  res.send("welcome");
});

app.post("/addStudents", (req, res) => {
  console.log(req.body);
  res.send("got the data...");
});

app.get("/contact", (req, res) => {
  console.log("hello i am from contact..");
  res.send("contact");
});

app.get("/about", (req, res) => {
  console.log("hello i am  from about..");
  res.send("about");
});

app.get("/blogs", (req, res) => {
  console.log("hello i am  from blogs..");
  const data = fs.readFileSync("./SimpleMiddleware.js", "utf-8");
  res.send(data);
});

app.listen(port, () => {
  console.log(`port is active ${port}`);
});
