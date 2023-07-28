const jwt = require("jsonwebtoken");
const users = require("../models/users");
require("dotenv").config();

const tokenSecret = process.env.TOKEN_SECRET;

const getToken = async (req, res) => {
  const { email, password } = req.body;
    let data, user;
    try {
        user = await users.getUserByEmailAndPassword(email, password);
        // user = await json(data);
        console.log('Search email/password result:')
        console.log(user)
    } catch (error) {
        console.log(error);
        throw error;
    }

  if (user) {
    const token = jwt.sign({ username: user.username }, tokenSecret, {
      expiresIn: "7d",
    });

    res
      .status(201)
      .cookie("access-token", token, {
        // httpOnly: true,
        samesite: "lax",
      })
      .json({
        message: "User logged",
        token,
      });
  } else {
    res.send("Incorrect user or password");
  }
};

module.exports = {
  getToken,
};
