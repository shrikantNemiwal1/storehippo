// Importing required modules
const express = require("express");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const ErrorClass = require("./services/error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS"
  );
  next();
});

app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Define a route handler
app.get("/", (req, res) => {
  res.send("Welcome to storehippo backend server!!!");
});

// Handling all other routes with a 404 error
app.all("*", (req, res, next) => {
  next(new ErrorClass(`Requested URL ${req.path} not found!`, 404));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const errorCode = err.code || 500;
  res.status(errorCode).send({
    message: err.message || "Internal Server Error. Something went wrong!",
    status: errorCode,
  });
});

module.exports = app;
