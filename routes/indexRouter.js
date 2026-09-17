const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.index);
indexRouter.post("/delete", indexController.userDeletePost);

module.exports = indexRouter;
