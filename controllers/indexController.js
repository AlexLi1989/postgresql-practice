const db = require("../db/queries");

async function index(req, res, next) {
  try {
    const usernames = await db.getAllUsernames();
    res.render("index", { TITLE: "Index", usernames: usernames });
  } catch (error) {
    next(error); // Pass the error to the next middleware or controller in case of an error
  }
}

async function userDeletePost(req, res, next) {
  try {
    await db.deleteUsername(req.body.id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  index,
  userDeletePost,
};
