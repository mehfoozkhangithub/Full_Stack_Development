const jwt = require("jsonwebtoken");

const Authenticate = (req, res, next) => {
  // ? this is optional chaning
  // const token = req.headers?.Authoriztion?.split(" ")[1];
  const token = req.headers?.authoriztion?.split(" ")[1];
  // console.log(token, "this is token");
  if (token) {
    jwt.verify(token, "hush", (err, decode) => {
      if (decode) {
        const userId = decode?.userId;
        req.body.userID = userId;
        console.log(req.body, "this is auth console");
        console.log(decode);
        next();
      } else {
        res.status(401).send("Please login don't have token!!!", err);
      }
    });
  } else {
    res.status(401).send("first login please!!!");
  }
};

module.exports = { Authenticate };
