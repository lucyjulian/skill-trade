
const express = require('express');
const router = express.Router();
const listingController = require('../database/controllers/listingController');

//Route to /listings/:tag
router.route("/:tag")
    .get(listingController.getListingByTag);

//route to create a new listing and link it to the person's profile
router.route("/:userID")
    .post(listingController.postNewListingByUser);


//route to delete a listing
router.route("/delete/:id")
    .delete(listingController.deleteListingByID);


module.exports = router;

// const router = require("express").Router();
// const listingController = require("../../controllers/listingcont");


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


// module.exports = router; 

