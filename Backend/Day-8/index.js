const express = require("express");
const port = 7500;
const app = express();

const { Connections } = require("./db");

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/user", (req, res) => {
  res.send("users");
});

app.listen(port, async () => {
  try {
    await Connections;
    console.log("Connected into DB Succesfully...");
  } catch (err) {
    console.log(err);
    console.log("Connected into DB Failed!!!");
  }
  console.log(`your port is on ${port}`);
});
