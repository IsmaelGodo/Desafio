const pool = require("../utils/db_pgsql");
const dataformQueries = require("../queries/dataformQueries");

const getDataformModel = async (user_id) => {
    let client, result;
    try {
      client = await pool.connect();
      const data = await client.query(dataformQueries.getDataformById, [user_id]);
      result = data.rows;
      console.log(result);
    } catch (error) {
      console.log("Ha habido un error");
      console.log(error);
      throw error;
    } finally {
      client.release();
    }
    return result;
  };

  const createDataform = async (newDataform) => {
    const { user_id, sex, age, height, weight, water_gl, activity, cardio_dis, digest_dis, neuro_dis, lung_dis } = newDataform;
    let client, result;
    console.log(newDataform);

    try {
        client = await pool.connect(); 
        const data = await client.query(dataformQueries.createDataform,[user_id, sex, age, height, weight, water_gl, activity, cardio_dis, digest_dis, neuro_dis, lung_dis ])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
  }


  module.exports = {
    
    getDataformModel,
    createDataform
}