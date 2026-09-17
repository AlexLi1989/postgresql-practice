const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  //$1 is a placeholder to prevent SQL injection
}

async function searchUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE ($1)",
    [`%${username}%`],
  );
  return rows;
}

async function deleteUsername(usernameId) {
  await pool.query("DELETE FROM usernames WHERE usernames.id = ($1)", [
    usernameId,
  ]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsername,
  deleteUsername,
};
