const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: String,
    note: String,
    category: [],
    userID: String,
  },
  { versionKey: false }
);

const NotesModule = mongoose.model("note", notesSchema);

module.exports = { NotesModule };
