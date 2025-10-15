const mongoose = require('mongoose');
require('dotenv').config();

const Conection = mongoose.connect(process.env.MongoDB_URL);

module.exports = { Conection };
