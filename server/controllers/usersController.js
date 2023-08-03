const users = require("../models/users");

const getUsers = async (req, res) => {
  let data;
  try {
    if (req.query.email) {
      data = await users.getUserByEmail(req.query.email);
      res.status(200).json(data);
    } else if (req.query.user_id) {
      data = await users.getUserById(req.query.user_id);
      res.status(200).json(data);
    } else {
      data = await users.getAllUsers();
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "No se ha realizado correctamente la consulta",
      error
    });
  }
};

const createUser = async (req, res) => {
  let data;
  try {
    data = await users.createUser(req.body);
    res.status(201).json({
      message: `User with username "${req.body.username}" created`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "No se ha podido guardar el usuario",
      error
    });
  }
};

module.exports = {
  getUsers,
  createUser,
};
