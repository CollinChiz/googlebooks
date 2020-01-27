const router = require("express").Router();
const booksController = require("../../controller/bookdb");

router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

  router
  .route("/:id")
  .delete(booksController.remove);

  module.exports = router;