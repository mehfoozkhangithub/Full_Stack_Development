const express = require("express");

// here we have to add routers to a file where our data flow to main.
const dataAddedRouter = express.Router();

dataAddedRouter.get("/", (req, res) => {
  res.send("all data here...");
});

dataAddedRouter.get("/men", (req, res) => {
  res.send("filter data here...");
});

dataAddedRouter.post("/addData", (req, res) => {
  console.log(req.body);
  res.send("all data here...");
});

module.exports = { dataAddedRouter };
