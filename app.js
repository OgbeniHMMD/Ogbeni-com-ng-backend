const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Import the routers
const utilRoutes = require("./routes/util.route");
const miscRoutes = require("./routes/misc.route");
const { ResourceNotFoundController } = require("./controllers/util.controller");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

/* Route handlers */
app.use("/", utilRoutes);
app.use("/misc", miscRoutes);
app.all("*", ResourceNotFoundController);

module.exports = app;
