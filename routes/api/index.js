const router = require("express").Router();
const chefRoutes = require("./chef");
const loginRoutes = require("./login");

// Book routes
router.use("/chef", chefRoutes);
router.use("/login", loginRoutes);

module.exports = router;
