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

/* Route handlers */
app.use("/", utilRoutes);
app.use("/misc", miscRoutes);
app.all("*", ResourceNotFoundController);

module.exports = app;
