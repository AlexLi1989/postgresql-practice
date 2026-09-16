const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 3 and 40 characters.";

const validateUser = [
  body("username")
    .trim()
    .isAlpha()
    .withMessage(alphaErr)
    .isLength({ min: 3, max: 40 })
    .withMessage(lengthErr)
    .escape(),
];

function userCreateGet(req, res) {
  res.render("newUser", {
    TITLE: "New User",
    username: "",
  });
}
const userCreatePost = [
  ...validateUser,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("newUser", {
          TITLE: "New User",
          username: req.body.username,
          errors: errors.array(),
        });
      }
      const { username } = matchedData(req);
      await db.insertUsername(username);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  },
];

module.exports = {
  userCreateGet,
  userCreatePost,
};
