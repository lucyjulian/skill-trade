const db = require("../models");

module.exports = {

    getListingByTag: function (req, res) {
        db.Listing.find({'hashtags': req.params.tag}, null, { sort: { '_id': -1 } }, function (error, data) {
        if (error) throw error;
        res.send(data);
        });
    },

    //route to create a new listing and link it to the person's profile
    postNewListingByUser: function(req, res) {

        db.Listing.create(req)
        .then(function(dbListing) {
            console.log(dbListing);
        db.Profile.findOneAndUpdate({ _id: req.params.userID }, { $push: { listings: dbListing._id }}, { new: true });
        });
    },

    //route to delete a listing
    deleteListingByID: function(req, res) {
        db.Listing.remove({_id: req.params.id})
        .then(function(data){
            console.log(data);
            res.send(data);
        });
    }

};