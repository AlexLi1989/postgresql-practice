const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "alex",
  database: "top_users",
  password: "a3191121",
  port: 5432, // The default port
});
