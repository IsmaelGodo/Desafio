const dataform = require('../models/dataform');

const getDataform = async (req, res) => {
    let data;
  try {

    data = await dataform.getDataformModel(req.query.user_id);
    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    throw err;
  }
};

const postDataform = async (req, res) => {

  const newDataform = req.body; // {user_id, sex, age, height, weight, water_gl, activity, cardio_dis, digest_dis, neuro_dis, lung_dis}
  const response = await dataform.createDataform(newDataform);
  res.status(201).json({
      "message": `Creado`
  });
}

  module.exports = {
    getDataform,
    postDataform
  }