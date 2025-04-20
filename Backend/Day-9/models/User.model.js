const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    legal: Boolean,
    city: String,
    language: String,
    profession: String,
    org: String,
  },
  { versionKey: false }
);

const UserModule = mongoose.model("user", userSchema);

module.exports = { UserModule };
