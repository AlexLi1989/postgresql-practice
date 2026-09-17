const { query, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 3 and 40 characters.";

const validateSearch = [
  query("username") //query is used instead of body since we are dealing with search query
    .optional({ values: "falsy" }) //notifying validator if input is undefined,null or '', skip validation
    .trim()
    .isAlpha()
    .withMessage(alphaErr)
    .isLength({ min: 3, max: 40 })
    .withMessage(lengthErr)
    .escape(),
];

const userSearchGet = [
  ...validateSearch,
  async (req, res, next) => {
    let searchResult = [];
    let hasSearched = false;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("search", {
          TITLE: "Search",
          username: req.query.username,
          errors: errors.array(),
        });
      }
      const queryName = req.query.username;
      if (queryName) {
        const { username } = matchedData(req);
        searchResult = await db.searchUsername(username);
        hasSearched = true;
      }
      res.render("search", {
        TITLE: "Search",
        username: req.query.username,
        searchResult: searchResult,
        hasSearched: hasSearched,
      });
    } catch (error) {
      next(error);
    }
  },
];
module.exports = {
  userSearchGet,
};
