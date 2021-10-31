const express = require("express");
const router = express.Router();
const { ContactUsController } = require("../controllers/misc.controller");
const {
  ResourceNotFoundController,
} = require("../controllers/util.controller");

/* POST Contact-us Controller */
router.post("/contact", ContactUsController);

/* Capture ALL 404 errors */
router.all("*", ResourceNotFoundController);

module.exports = router;
