const express = require("express");
const dataformController = require("../controllers/dataformController");
const authMiddlewares = require("../middlewares/authMiddlewares");
const dataformRouter = express.Router();

dataformRouter.get("/", dataformController.getDataform);
dataformRouter.post("/", dataformController.postDataform);
dataformRouter.put("/", dataformController.putDataform);

module.exports = dataformRouter;
