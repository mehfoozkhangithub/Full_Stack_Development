const mongoose = require("mongoose");
require("dotenv").config();

const Connections = mongoose.connect(process.env.MongoDb_Url);
// const Connections = mongoose.connect("mongodb://127.0.0.1:27017/masaidb");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  legal: Boolean,
  city: String,
  language: String,
  profession: String,
  org: String,
});

const UserModule = mongoose.model("user", userSchema);

module.exports = { Connections, UserModule };
