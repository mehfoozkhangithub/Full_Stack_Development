const express = require("express");

const { Connections } = require("./config/db");
const { UserModule } = require("./models/User.model");
const { userRouters } = require("./routes/user.routes");

require("dotenv").config();

// const port = 7500;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const data = req.body;
  try {
    const addManyData = await UserModule.updateMany({}, { $set: data });
    res.send(addManyData);
    console.log(`data was added... in every documents..`);
  } catch (err) {
    console.log(err);
  }
});
// hello

app.use("/user", userRouters);

app.listen(process.env.Port, async () => {
  try {
    await Connections;
    console.log("Connected into DB Succesfully...");
  } catch (err) {
    console.log(err);
    console.log("Connected into DB Failed!!!");
  }
  console.log(`your port is on ${process.env.Port}`);
});
