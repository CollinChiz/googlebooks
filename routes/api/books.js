const router = require("express").Router();
const booksController = require("");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

  router
  .route("/:id")
  .put(booksController)
  .delete(booksController.remove);

  module.exports = router;