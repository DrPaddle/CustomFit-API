const { Pool } = require("pg");

//****connect database using node-postgress****//
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "final",
  port: 5433
});
module.exports = pool;
