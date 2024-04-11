const express = require("express");
const productsRouter = express.Router();
const userController = require("../controllers/products");

productsRouter.get("/get-all", userController.getAllProducts);
productsRouter.post("/create", userController.createProduct);

module.exports = productsRouter;
