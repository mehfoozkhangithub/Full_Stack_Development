// server

// import from node_modules
const express = require("express");
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();


// import from personal file...
const { Conection } = require('./config/DB')
const { SignupModel } = require('./model/signup.model');


// here server created...
const app = express();

app.use(express.json()); // to parse JSON body

app.get("/", (req, res) => {
    res.send("welcom.....")
});

app.post("/signup", async (req, res) => {
    const { email, pass, name } = req.body;

    // fs.writeFileSync("./write/index.txt", JSON.stringify({ email, pass }), { encoding: "utf-8" }, (error, data) => {
    //     if (error) res.send(error);
    //     else res.send(data)
    // })
    // res.send("signup page");

    const UserPresent = await SignupModel.find({ email });
    console.log('🚀 ~ UserPresent:', UserPresent);
    if (UserPresent) {
        res.send('❌ User Not Found????');
        return;
    }

    try {
        bcrypt.hash(pass, 5, async (err, deff_Pass) => {
            console.log('🚀 ~ deff_Pass:', deff_Pass);
            // if (deff_Pass) console.log('🚀 ~ deff_Pass:', deff_Pass);
            // else console.log(err);

            const user = new SignupModel({
                email,
                pass: deff_Pass,
                name
            });
            await user.save();
            return res.status(200).json({ success: true, message: "Signup Successful" });

        })
    } catch (error) {
        console.log('🚀 ~ error:', error);
        res.send('something went wrong! please try again leater...');
    }


})


app.listen(process.env.PORT, async () => {
    try {
        await Conection;
        console.log(`Connection DB Success...`);

    } catch (error) {
        console.log(`Connection DB Failed!!!`);
        console.log('🚀 ~ error:', error);

    }
    console.log(`your port no running on ${process.env.PORT}`);
});

