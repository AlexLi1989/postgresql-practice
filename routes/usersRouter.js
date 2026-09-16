const { Router } = require("express");
const usersRouter = Router();
const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.userCreateGet);
usersRouter.post("/", usersController.userCreatePost);

module.exports = usersRouter;
