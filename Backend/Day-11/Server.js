const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const { Connections } = require("./config/db");
const { UserModule } = require("./model/User.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome...");
});

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
      const token = jwt.sign({ course: "nxm" }, "hush");
      res.send({ msg: "login Succesfull...", token: token });
    } else {
      res.send("login Unsuccesfull...");
    }
  } catch (err) {
    console.log(err);
    res.send("something went wrong! please try again leater...");
  }
});

app.get("/about", (req, res) => {
  res.send("this is about...");
});

app.get("/weather", (req, res) => {
  const token = req.query.token;
  // const token - req.headers.authoriztion?.split(" ")[1]; //* this we have to put and the-> correct manner is this
  const decoded = jwt.verify(token, "hush", (err, decoded) => {
    if (err) {
      res.send("please login first!!!");
    } else if (decoded) {
      res.send("this is weather...");
    }
  });
});

app.get("/purchased", (req, res) => {
  const token = req.query;

  console.log(token);
  if (token.token === "abc123") res.send("your purchaseh token...");

  res.send("please login first!!!");
});

app.get("/contact", (req, res) => {
  res.send("this is contact...");
});

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
