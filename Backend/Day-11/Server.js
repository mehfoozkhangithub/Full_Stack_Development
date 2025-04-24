const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(process.env.Port, () => {
  console.log(`Server ws connected to ${process.env.Port}`);
});
