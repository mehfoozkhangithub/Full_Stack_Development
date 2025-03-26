const express = require("express");
const fs = require("fs");
const port = 9800;

const app = express();

// example:1

// acedb

app.use((req, res, next) => {
  console.log("a");
  next();

  console.log("b");
});

// example:2

app.use((req, res, next) => {
  console.log("c");
  next();
  console.log("d");
});

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
