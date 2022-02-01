const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookies = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookies());

//Route imports
const student = require("./routes/stdportalroute");

app.use("/api/v1",student);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;