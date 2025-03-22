const express = require("express");
const Port = 8000;

const app = express();

// crud operation...

app.get("./", (req, res) => {
  res.send("add data...");
});

app.listen(Port, () => {
  console.log("Port was Listing: ", Port);
});
