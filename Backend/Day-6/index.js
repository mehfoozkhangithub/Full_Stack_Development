const express = require("express");
const Port = 8900;
const app = express();

const { dataAddedRouter } = require("./Routes/dataAdd.routes");

app.use(express.json());

app.use("/data", dataAddedRouter);

app.get("/", (req, res) => {
  res.send("welcom");
});

app.get("/about", (req, res) => {
  const { course } = req.query;
  res.send(`this is the dynimic param ${course}`);
});

// concept of query explain below

app.get("/weather", (req, res) => {
  const data = {
    bangalore: "winter",
    california: "spring",
    londan: "summery",
  };
  const city = req.query.city;
  const weather = data[city];
  res.send(`Today weather in ${city} is ${weather}`);
});

// here we have to implement params

app.get("/students/:studentId", (req, res) => {
  const ID = req.params.studentId;
  res.send(`Here is the data od student who's ID is ${ID}`);
});

// video -> 01:10;

app.post("/addData", (req, res) => {
  console.log(req.body);
  res.send("added data form db...");
});

app.listen(Port, () => {
  console.log(`your are running on ${Port}`);
});

// hello
