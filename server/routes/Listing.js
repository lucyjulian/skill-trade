const express = require('express');
const router = express.Router();
const Listing = require('../database/models/Listing');
const Profile = require('../database/models/Profile');
//Route to call listings based on hashtag
router.get("/listings/:tag", function (req, res) {
    Listing.find({'hashtags': req.params.tag}, null, { sort: { '_id': -1 } }, function (error, data) {
      if (error) throw error;
      res.send(data);
    });
});

//route to create a new listing and link it to the person's profile
router.post("/listings/:userID", function(req, res) {

	Listing.create(req)
	.then(function(dbListing) {
		console.log(dbListing);
	Profile.findOneAndUpdate({ _id: req.params.userID }, { $push: { listings: dbListing[1]._id }}, { new: true });
	});
});

//route to delete a listing
router.put("/listings/delete/:id", function(req, res) {
    Listing.remove({_id: req.params.id})
    .then(function(data){
        console.log(data);
        res.send(data);
    });
});