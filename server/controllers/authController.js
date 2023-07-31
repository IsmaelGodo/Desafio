const jwt = require("jsonwebtoken");
const users = require("../models/users");
require("dotenv").config();

const tokenSecret = process.env.TOKEN_SECRET;

const getToken = async (req, res) => {
  const token = jwt.sign({ username: req.username, email: req.email },tokenSecret, {
    expiresIn: "7d",
  });

  res
    .status(201)
    .cookie("access-token", token, {
      // httpOnly: true,
      samesite: "lax",
    })
    .cookie("user-logged", req.email, {
      // httpOnly: true,
      samesite: "lax",
    })
    .json({
      message: `Hello ${req.username}, you are logged`,
      user_id: req.user_id, 
      username: req.username, 
      email: req.email,
      token,
    });
};

module.exports = {
  getToken,
};
