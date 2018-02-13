const router = require("express").Router();
const userRoutes = require("./user");
const loginRoutes = require("./login");
const foodRoutes = require("./food");

// Book routes
router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/food", foodRoutes);

module.exports = router;
