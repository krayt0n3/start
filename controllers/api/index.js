const router = require("express").Router();
const postRoutes = require("./post");
// Book routes
router.use("/post", postRoutes);

module.exports = router;
