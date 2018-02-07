const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(chefController.findAll)
  .post(chefController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(chefController.findById)
  .put(chefController.update)
  .delete(chefController.remove);

module.exports = router;
