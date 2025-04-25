const express = require("express");
require("dotenv").config();

const { Connections } = require("./config/db");
const { UserModule } = require("./model/User.model");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const payload = req.body;
  // console.log(payload);
  try {
    const users = new UserModule(payload);
    await users.save();
    res.send("Signup Succesfull...");
  } catch (err) {
    console.log(err);
    res.send("something went wrong! please try again leater...");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUserDetails = await UserModule.find({ email, password }); // here we pass the email/pas into the find is useing and-operator
    if (checkUserDetails.length > 0) {
      res.send("login Succesfull...");
    } else {
      res.send("login Unsuccesfull...");
    }
  } catch (err) {
    console.log(err);
    res.send("something went wrong! please try again leater...");
  }
});

app.get(
  "/about",
  (req,
  (res) => {
    res.send("this is about...");
  })
);

app.get(
  "/weather",
  (req,
  (res) => {
    res.send("this is weather...");
  })
);

app.get(
  "/purchased",
  (req,
  (res) => {
    res.send("your purchaseh token...");
  })
);

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
