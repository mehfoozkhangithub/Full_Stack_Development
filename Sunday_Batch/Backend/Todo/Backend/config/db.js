const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.production' });

const connection = mongoose.connect(process.env.DB);

module.exports = { connection };
