var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(500);
  res.json({
    status: "501",
    code: "NOT_IMPLEMENTED",
    message: "Feature not implemented",
  });
});

module.exports = router;
