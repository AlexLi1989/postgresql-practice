const { Router } = require("express");
const searchRouter = Router();
const searchController = require("../controllers/searchController");

searchRouter.get("/", searchController.userSearchGet);

module.exports = searchRouter;
