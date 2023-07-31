const jwt = require("jsonwebtoken");
const users = require("../models/users");
require("dotenv").config();

const tokenSecret = process.env.TOKEN_SECRET;

const checkEmailAndPassword = async (req, res, next) => {
  console.log("Checking email and password");
  const { email, password } = req.body;
  let user;
  try {
    [user] = await users.getUserByEmail(email);
    console.log("getUserByEmail result:");
    console.log(user);
  } catch (error) {
    console.log(error);
    throw error;
  }

  if (user) {
    if (user.password === password) {
      req.user_id = user.user_id;
      req.username = user.username;
      req.email = user.email;
      next();
    } else {
      res.status(401).json({
        message: "",
      });
    }
  } else {
    res.status(401).json({
      message: `User ${user.username} doesn't exist in the system`,
    });
  }
};

const checkUser = async (req, res, next) => {
  const email = req.body.email;
  let user;
  try {
    [user] = await users.getUserByEmail(email);
  } catch (error) {
    res.status(404).json({
      message: "Error in db",
    });
  }
  if (user) {
    res.status(401).json({
      message: "Email already exist",
    });
  } else {
    next();
  }
};

const checkToken = async (req, res, next) => {
  const token = req.cookies["access-token"];

  console.log("Taking token from cookie");
  console.log(token);

  if (token) {
    jwt.verify(token, tokenSecret, (error, user) => {
      if (error) {
        res.sendStatus(403).json({
          message: "Wrong token",
          user: user,
        });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.sendStatus(401).json({
      message: "Token not provided",
    });
  }
};

module.exports = {
  checkEmailAndPassword,
  checkUser,
  checkToken
};
