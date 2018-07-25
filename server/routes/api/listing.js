
const express = require('express');
const router = express.Router();
const listingController = require('../database/controllers/listingController');


//Route to /listings/
router.route("/")
    .post(listingController.postNewListingByUser)
    .get(listingController.findAll);

//Route to /listings/:tag
router.route("/:tag")
    .get(listingController.getListingByTag);

//route to delete a listing
router.route("/delete/:id")
    .delete(listingController.deleteListingByID);


module.exports = router;

