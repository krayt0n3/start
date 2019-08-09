const router = require("express").Router();
const scrapeRoutes = require("./scrape");
// scrape route

router.use("/scrape", scrapeRoutes);

module.exports = router;
