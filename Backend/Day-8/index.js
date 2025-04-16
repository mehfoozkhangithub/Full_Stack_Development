const express = require("express");
const port = 7500;
const app = express();

app.use(express.json());

const { Connections, UserModule } = require("./db");

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/user", async (req, res) => {
  const params = req.query;
  try {
    const users = await UserModule.find(params);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong..." });
  }
});
app.post("/createuser", async (req, res) => {
  try {
    let payload = req.body;
    //*  this is the way we insert data in mongo db formate
    // await UserModule.insertMany([payload]);

    //? now we insert the data in mongoose way
    // in case if you inserting in one data use this code write below
    const payloadMongooseWay = new UserModule(payload);
    await payloadMongooseWay.save();
    res.send("sucessfully created");
  } catch (error) {
    console.log(err);
    res.send({ err: "something went wrong..." });
  }
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
