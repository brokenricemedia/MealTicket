const router = require("express").Router();
const userRoutes = require("./user");
const loginRoutes = require("./login");
const foodRoutes = require("./food");
const cartRoutes = require("./cart");

// Book routes
router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/food", foodRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
