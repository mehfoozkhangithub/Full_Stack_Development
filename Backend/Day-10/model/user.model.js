// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    role: {
      type: String,
      enum: ['student', 'trainer'], //full form of Enumeration
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('User', userSchema);
