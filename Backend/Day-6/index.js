const express = require("express");
const Port = 8900;
const app = express();

const { routersData } = require("./Routes/dataAdd.routes");

app.use(express.json());

app.use("/addData", routersData);

app.get("/", (req, res) => {
  res.send("welcom");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.post("/addData", (req, res) => {
  console.log(req.body);
  res.send("added data form db...");
});

app.listen(Port, () => {
  console.log(`your are running on ${Port}`);
});
