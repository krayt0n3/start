const router = require("express").Router();
var db = require("../../models");
// get route -> index
router.get("/", function(req, res) {
  console.log("as hit");
  res.end();
});

// get route, edited to match sequelize

// replace old function with sequelize function


module.exports = router;
