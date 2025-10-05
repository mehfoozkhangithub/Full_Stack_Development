const jwt = require("jsonwebtoken");
require('dotenv').config();


const Authentication = (req, res, next) => {

    const tokenVerify = req.headers?.authorization?.split(' ')[1];
    console.log('🚀 ~ tokenVerify:', tokenVerify);
    if (tokenVerify) {
        jwt.verify(tokenVerify, process.env.SECRET_KEY, (err, data) => {
            if (data) {
                const userId = data?.userID;
                console.log('🚀 ~ userId:', userId);
                req.user = { userID: userId };
                next();
            } else {
                return res.status(401).send("Please login don't have token!!!", err);
            }
        });
    } else {
        res.send("you don't have token please login first!!!")
    }


}

module.exports = { Authentication }