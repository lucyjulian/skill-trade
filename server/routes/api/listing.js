const router = require("express").Router();
const listingController = require("../../controllers/listingcont");


// // Matches with "/api/books"
// router.route("/")
//   .get(listingController.findAll)
//   .post(listingController.create);

// // Matches with "/api/books/:id" 
// router
//   .route("/:id")
//   .get(listingController.findById)
//   .put(listingController.update)
//   .delete(listingController.remove);


module.exports = router; 