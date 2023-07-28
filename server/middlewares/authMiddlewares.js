const users = require("../models/users");

const checkEmailAndPassword = async (req, res, next) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await users.getUserByEmail(email);
    console.log("Search email/password result:");
    console.log(user);
  } catch (error) {
    console.log(error);
    throw error;
  }

  if (user) {
    if (user.password === password) {
      res.status(200).json({
        message: `Hello ${user.username}, you are logged`,
      });
      req.username = user.username;
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
