const db = require("../models");

module.exports = {
// Route for grabbing a specific profile by id, populate it with it's listings and reviews
    getUserProfile: function(req, res) {
        // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
        db.User.findOne({ _id: req.params.id })
        // ..and populate all of the notes associated with it
        .populate("listings")
        .populate("reviews")
        .then(function(userProfile) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(userProfile);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
    },

    // Route for saving/updating an Profiles's number of karmaChips
    addChips: function(req, res) {
        
        // Create a new note and pass the req.body to the entry
        db.User.findOneAndUpdate({_id: req.params.id}, {$set: { karmaChips: req.params.chips }})
        .then(function(dbProfile) {
            console.log(dbProfile);
            res.send(dbProfile);
        });
    }

};
