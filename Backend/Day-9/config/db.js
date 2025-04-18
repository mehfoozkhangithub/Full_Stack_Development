const mongoose = require("mongoose");
require("dotenv").config();

const Connections = mongoose.connect(process.env.MongoDb_Url);
// const Connections = mongoose.connect("mongodb://127.0.0.1:27017/masaidb");

module.exports = { Connections };
