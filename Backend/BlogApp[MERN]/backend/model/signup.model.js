const mongoose = require('mongoose');


const SignupSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String
}, {
    versionKey: false
});

const SignupModel = mongoose.model("signup", SignupSchema);


module.exports = { SignupModel }