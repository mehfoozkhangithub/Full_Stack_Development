const jwt = require("jsonwebtoken");

const Authenticate = (req, res, next) => {
  // ? this is optional chaning
  const token = req.headers?.Authoriztion?.split(" ")[1];
  console.log(token, "this is token");
  if (token) {
    const decode = jwt.verify(token, "hush");
    if (decode) {
      next();
    } else {
      res.status(401).send("Please login don't have token!!!", err);
    }
  } else {
    res.status(401).send("first login please!!!");
  }
};

module.exports = { Authenticate };
