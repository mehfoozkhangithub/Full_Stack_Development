const express = require("express");
const port = 9800;

const app = express();

// always use on top
app.use((req, res, next) => {
  console.log("hello i am  from middleware..");
  next();
});

app.get("/", (req, res) => {
  console.log("hello i am  from base route..");
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
  res.send("blogs");
});

app.listen(port, () => {
  console.log(`port is active ${port}`);
});
