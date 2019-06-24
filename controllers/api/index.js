const router = require("express").Router();
//Sequelize Routes
const postRoutes = require("./post");


// Book routes
router.use("/post", postRoutes);

module.exports = router;
