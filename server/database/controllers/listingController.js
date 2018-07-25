const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Listing.find({ sort: { '_id': -1 } })
        .then(data => res.json(data))
        .catch(err => res.status(404).json(err));
    },

    create: function(req, res) {
        db.Listing
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

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
        db.User.findOneAndUpdate({ _id: req.userID }, { $push: { listings: dbListing._id }}, { new: true });
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