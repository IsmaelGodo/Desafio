const dataformQueries = {
    
    getDataformById: `
          SELECT * FROM data
          WHERE user_id=$1`,
    createDataform: `INSERT INTO data (user_id, sex, age, height, weight, water_gl, activity, cardio_dis, digest_dis, neuro_dis, lung_dis) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    updateDataform: `UPDATE data
        SET sex=$2, age=$3, height=$4, weight=$5, water_gl=$6, activity=$7, cardio_dis=$8, digest_dis=$9, neuro_dis=$10, lung_dis=$11
        WHERE user_id = $1;`
  };
  
  module.exports = dataformQueries;