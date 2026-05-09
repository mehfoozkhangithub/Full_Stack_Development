const mongoose = require('mongoose');

const Connection = mongoose.connect(process.env.Mongo_Db);

module.exports = { Connection };
