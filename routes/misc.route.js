const express = require("express");
const router = express.Router();
const { ContactUsController } = require("../controllers/misc.controller");

/* POST Contact-us Controller */
router.post("/contact", ContactUsController);

module.exports = router;
