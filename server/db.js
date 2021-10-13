//* Here we will connect the Postgre SQL Database

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "alihaider104",
  host: "localhost",
  database: "TAHAA",
  port: 5432,
});

module.exports = pool;
