const { Pool } = require("pg");
require("dotenv").config();

console.log(process.env.PG_USER);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  ssl: true,
});

module.exports = pool;