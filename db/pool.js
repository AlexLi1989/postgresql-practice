const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  connectionString: process.env.DB_URL, //if there is a db url in the environment, we will use it instead
  host: process.env.DB_HOST || "localhost", // or wherever the db is hosted
  user: process.env.DB_USER || "alex",
  database: process.env.DB_NAME || "top_users",
  password: process.env.DB_PASSWORD || "a3191121",
  port: process.env.DB_PORT || 5432, // The default port
});
