const express = require("express");
const port = 7500;
const app = express();

app.listen(port, () => {
  console.log(`your port is on ${port}`);
});
