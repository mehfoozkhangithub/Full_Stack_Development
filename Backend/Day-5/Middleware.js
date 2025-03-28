const express = require("express");
const fs = require("fs");
const port = 9800;

const app = express();

const watchman = (req, res, next) => {
  const startTime = new Date().getTime();
  next();
  const endTime = new Date().getTime();
  console.log(endTime - startTime);
};

const logger = (req, res, next) => {
  next();
};

app.use(watchman, logger);

app.get("/", (req, res) => {
  console.log("e");
  res.send("welcome");
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
