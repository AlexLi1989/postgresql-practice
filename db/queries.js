const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  //$1 is a placeholder to prevent SQL injection
}

module.exports = {
  getAllUsernames,
  insertUsername,
};
