const mongoose = require('mongoose');
require('dotenv').config();

const Conection = mongoose.connect(process.env.BASE_URL);

module.exports = { Conection };
