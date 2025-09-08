const { Router } = require("express");

const { UserModule } = require("../models/User.model");

const userRouters = Router();

userRouters.get("/", async (req, res) => {
  const params = req.query;
  try {
    const users = await UserModule.find(params);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong..." });
  }
});
userRouters.post("/create", async (req, res) => {
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

userRouters.put("/update/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  const payload = req.body;

  try {
    const query = await UserModule.findByIdAndUpdate({ _id: userId }, payload);
    console.log(query);
    res.send("Update");
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong... try anagin later." });
  }
});

userRouters.delete("/delete/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    await UserModule.findByIdAndDelete({ _id: userId });
    res.send(`user id ${userId} have been deleted`);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong... try anagin later." });
  }
});

module.exports = { userRouters };
