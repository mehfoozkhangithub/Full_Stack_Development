// express
const express = require("express");

const app = express(); // here we invoke the express...

app.use(express.json()); // to parsh the data...

app.get("/", (req, res) => {
  res.send("aceppted data...");
});

app.post("/addDetails", (req, res) => {
  // console.log(req);
  console.log(req.body);
  res.send("acecepted data from post...");
});

app.listen(7000, () => {
  console.log("port listen on 7000");
});
