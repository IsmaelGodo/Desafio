const jwt = require("jsonwebtoken");
const users = require("../models/users");
require("dotenv").config();

const tokenSecret = process.env.TOKEN_SECRET;

const getToken = async (req, res) => {
  const token = jwt.sign(
    { username: req.username, email: req.email },
    tokenSecret,
    {
      expiresIn: "7d",
    }
  );

  res
    .status(201)
    .cookie("access-token", token, {
      // httpOnly: true,
      samesite: "lax",
    })
    .cookie("user-logged", req.user_id, {
      // httpOnly: true,
      samesite: "lax",
    })
    .json({
      successful: true,
      message: `Hola ${req.username}, estás conectado`,
      user_id: req.user_id,
      username: req.username,
      email: req.email,
      token,
    });
};

const clearCookies = (req, res) => {
  console.log("clearCookies");
  // req.session.destroy();
  res.clearCookie("access-token").clearCookie("user-logged").json({
    message: "Sesión cerrada correctamente"
  });
};

module.exports = {
  getToken,
  clearCookies,
};
