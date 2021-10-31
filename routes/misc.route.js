const express = require("express");
const router = express.Router();
const { WelcomeController } = require("../controllers/util.controller");

/* POST ContactUsController */
router.post("/", WelcomeController);

module.exports = router;
