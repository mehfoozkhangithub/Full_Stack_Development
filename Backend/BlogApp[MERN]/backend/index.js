// import from node module  

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcrypt');
require("dotenv").config();

//import from file 

const { Conection } = require("./config/DB");
const { UserModel } = require("./model/index_model/index_user")

// here server created...
const app = express();

app.use(express.json())// for pars to body form json to object


// routes


app.get("/", (req, res) => {

    res.send('welcome.... index file');

})

app.post("/signup", async (req, res) => {
    const { email, pass, name } = req.body;

    const userData = await UserModel.findOne({ email });
    if (userData) {
        res.send("you'r alredy in the DB....🙄");
        return
    }

    // hello mjqqv

    try {

        bcrypt.hash(pass, 5, async (err, diff_Pass) => {
            try {
                console.log('🚀 ~ process.env.SAULT_ROUND:', process.env.SAULT_ROUND);
                console.log('🚀 ~ diff_Pass:', diff_Pass);

                const userInfo = new UserModel({
                    email,
                    pass: diff_Pass,
                    name
                });
                console.log('🚀 ~ userInfo:', userInfo);
                await userInfo.save();
                return res.status(201).json({ success: true, message: "Signup Successful" });
            } catch (error) {
                console.log(err);
            }

        });


    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
})

app.post('/login', async (req, res) => {

    const { email, pass } = req.body;
    console.log('🚀 ~ pass:', pass);
    console.log('🚀 ~ email:', email);

    const checkUser = await UserModel.find({ email })
    console.log('🚀 ~ You have to signup first:', checkUser);

    try {
        if (checkUser.length > 0) {
            const hashpass = checkUser[0].pass;
            console.log('🚀 ~ hashpass:', hashpass);

            bcrypt.compare(pass, hashpass, (err, result) => {
                console.log('🚀 ~ result:', result);

                if (result) {
                    const token = jwt.sign({ userID: checkUser[0]._id }, process.env.SECRET_KEY)
                    res.send({ msg: "login successfully ", token: token })
                }
                else {
                    res.status(404).send(`login unsuccessful", ${err}`)
                }

            })


        } else {
            res.send("login unsuccessfully, plz signup first")
        }
    } catch (error) {
        res.send('something went wrong! please try again leater...', error);
    }




})


app.listen(process.env.PORT, async () => {
    try {
        await Conection;
        console.log("Db connected successfully...");
        console.log(`port is running on ${process.env.PORT}`);
    } catch (err) {
        console.log(err);
    }
})




