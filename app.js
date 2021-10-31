const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Import the router files
const miscRouter = require("./routes/misc.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* Route handlers */
app.use("/", miscRouter);

/* Capture ALL 404 errors */
app.all("*", function (req, res) {
  res.status(404).json({
    message: "Resource not found",
    verb: req.method,
    status: 404,
  });
});

module.exports = app;
