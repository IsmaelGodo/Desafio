const users = require("../models/users");

const checkEmailAndPassword = async (req, res, next) => {
    console.log('Checking email and password')
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

module.exports = {
    checkEmailAndPassword
}