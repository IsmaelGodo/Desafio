const users = require('../models/users');

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
      throw error;
    }
  };

  module.exports = {
    getUsers
  }