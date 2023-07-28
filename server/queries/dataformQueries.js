const dataformQueries = {
    
    getDataformById: `
          SELECT * FROM data
          WHERE user_id=$1`,
    createDataform: `INSERT INTO data (user_id, sex, age, height, weight, water_gl, activity, cardio_dis, digest_dis, neuro_dis, lung_dis) VALUES ($1, $2, $3, $4, $5, $6, $6, $7, $8, $9, $10, $11)`
    
  };
  
  module.exports = dataformQueries;