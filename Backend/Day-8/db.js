const mongoose = require("mongoose");

const Connections = mongoose.connect("mongodb://127.0.0.1:27017/masaidb");

module.exports = { Connections };
