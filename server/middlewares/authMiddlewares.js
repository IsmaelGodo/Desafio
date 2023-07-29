const users = require("../models/users");

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

module.exports = {
  checkEmailAndPassword,
  checkUser
};
