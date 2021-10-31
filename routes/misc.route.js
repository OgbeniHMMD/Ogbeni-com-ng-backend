const express = require("express");
const router = express.Router();

// Import Controllers
const misc = require("../controllers/misc.controller");

/* POST ContactUsController */
router.post("/", misc.ContactUsController);
router.post("/contact", misc.ContactUsController);

module.exports = router;
