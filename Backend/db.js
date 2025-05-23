const Pool = require("pg").Pool;

const pool = new Pool({
  username: "rossd",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "flashcardapp",
});

module.exports = pool;
