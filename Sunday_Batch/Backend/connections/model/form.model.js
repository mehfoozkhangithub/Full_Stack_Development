const mongoose = require('mongoose');

const formSchema = mongoose.Schema(
  {
    name: String,
    age: String || Number,
    city: String,
    marks: String,
  },
  { versionKey: false },
);

const formModel = mongoose.model('user', formSchema);

module.exports = { formModel };
