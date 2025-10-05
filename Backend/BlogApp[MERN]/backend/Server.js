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
const { Authentication } = require('./middleware/Authentication');
const { notesRoutes } = require("./routes/Notes.routes")

// here server created...
const app = express();

app.use(express.json()); // to parse JSON body

app.use(cors()) // this is allow to give access to all website

app.get("/", (req, res) => {
    // console.log('🚀 ~ req:', req.headers);
    res.send({ msg: "welcom....." });
});


//signup

app.post("/signup", async (req, res) => {
    const { email, pass, name } = req.body;
    // fs.writeFileSync("./write/index.txt", JSON.stringify({ email, pass }), { encoding: "utf-8" }, (error, data) => {
    //     if (error) res.send(error);
    //     else res.send(data)
    // })
    // res.send("signup page");

    const UserPresent = await SignupModel.findOne({ email });
    if (UserPresent) {
        res.status(400).json({ msg: "❌ User Found it's present in DB???? please login", data: UserPresent });
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
            return res.status(201).json({ success: true, message: "Signup Successful" });
        });
    } catch (error) {
        console.log('🚀 ~ error:', error);
        res.send('something went wrong! please try again leater...');
    }
});
[
    {

    }
]

// login
app.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    console.log('🚀 ~ pass:', pass);
    console.log('🚀 ~ email:', email);

    try {
        const checkUser = await SignupModel.find({ email });
        console.log('🚀 ~ checkUser:', checkUser);

        if (checkUser.length > 0) {
            const hashPass = checkUser[0].pass;
            console.log('🚀 ~ hashPass:', hashPass);
            bcrypt.compare(pass, hashPass, (err, result) => {
                console.log('🚀 ~ result:', result);

                if (result) {
                    const token = jwt.sign({ userID: checkUser[0]._id }, process.env.SECRET_KEY);
                    res.send({ msg: 'login Succesfull...', token: token });
                } else {
                    res.status(404).send(`login Unsuccesfull password ${err}...`);
                }
            })

        } else {
            res.send('login Unsuccesfull... please signup first.....');
        }

    } catch (error) {
        res.send('something went wrong! please try again leater...', error);
    }

    // res.status(200).send({ email, pass });
})

app.use(Authentication);
//  here we have to create routes and the files.

app.use("/notes", notesRoutes);

// res.status(200).send(JSON.stringify({ email, pass }))
// return res.status(300).json({ email, pass });
/* 
axios.all 
axios.intersepter
*/

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



/* 

{
  "title":"",
  "note": "",
  "category": []
}

{
  "email":"mehfoozkhan77@gmail.com",
  "pass":"hkkkkkkkkk8887878"
}

token:-

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3Vyc2UiOiJtZXJuIiwiaWF0IjoxNzU5NDgxNTcwfQ.Cd4MkxatQ8qPrqGJP2zcmq9b2qSvvc_qU9pHU4bFF3c

*/