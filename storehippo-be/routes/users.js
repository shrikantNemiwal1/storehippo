const express = require("express"),
  userRouter = express.Router(),
  userController = require("../controllers/users"),
  { auth } = require("../middleware/auth");

userRouter.post("/login", userController.login);
userRouter.post("/signup", userController.signup);
userRouter.get("/logout", auth, userController.logout);

module.exports = userRouter;
