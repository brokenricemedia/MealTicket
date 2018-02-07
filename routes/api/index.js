const router = require("express").Router();
const chefRoutes = require("./chef");

// Book routes
router.use("/chef", chefRoutes);

module.exports = router;
