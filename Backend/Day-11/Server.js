const express = require("express");

require("dotenv").config();

const { Connections } = require("./config/db");

const app = express();

app.use(express.json());

app.listen(process.env.Port, async () => {
  try {
    await Connections;
    console.log("Connected to DB Succesfully...");
  } catch (err) {
    console.log("Connected to DB Failed??");
    console.log(err);
  }
  console.log(`Server ws connected to ${process.env.Port}`);
});
// js
