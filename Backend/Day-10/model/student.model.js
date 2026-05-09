// models/Student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  course: String,

  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer',
  },
});

module.exports = mongoose.model('Student', studentSchema);
