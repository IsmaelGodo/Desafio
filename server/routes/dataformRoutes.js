const express = require("express");
const dataformController = require("../controllers/dataformController");
const authMiddlewares = require('../middlewares/authMiddlewares')
const dataformRouter = express.Router();

dataformRouter.get("/", dataformController.getDataform);
dataformRouter.post("/", authMiddlewares.checkToken, dataformController.postDataform);
dataformRouter.put("/", authMiddlewares.checkToken, dataformController.putDataform);

module.exports = dataformRouter;