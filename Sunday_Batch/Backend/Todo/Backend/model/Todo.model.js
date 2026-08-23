const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema(
  {
    text: String,
    isEdit: Boolean,
    isComplete: Boolean,
  },
  {
    versionKey: false,
  },
);

const TodoModel = mongoose.model('todo', TodoSchema);

module.exports = { TodoModel };
