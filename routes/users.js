var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    status: "501",
    code: "NOT_IMPLEMENTED",
    message: "Feature not implemented",
  });
});

module.exports = router;
