const router = require("express").Router();
const cartController = require("../../controllers/cartcontrollers");

// Matches with "/api/cart"
router.route("/")
  .get(cartController.findAll)
  .post(cartController.create);

// Matches with "/api/cart/:id"
router
  .route("/:id")
  .get(cartController.findById)
  .put(cartController.update)
  .delete(cartController.remove);

module.exports = router;
