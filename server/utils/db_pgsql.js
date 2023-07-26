const { Pool } = require("pg");
require("dotenv").config();

console.log(process.env.OTRO);

const pool = new Pool({
  user: "project_team",
  host: "ep-icy-darkness-39532472.eu-central-1.aws.neon.tech",
  database: "neondb",
  password: "gSFKv4xDMr9Z",
  ssl: true,
});
module.exports = pool;
