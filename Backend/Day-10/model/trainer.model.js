// models/Trainer.js

const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  specialization: String,

  experience: Number,
});

module.exports = mongoose.model('Trainer', trainerSchema);
