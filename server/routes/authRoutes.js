const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/login", authController.getToken);

module.exports = authRouter;
