var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ListingSchema = new Schema({
  // `title` is of type String
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  datesAvailable: {
    type: String,
    required: true
  },
  hashtags: {
    type: Array,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Listing = mongoose.model("Listing", ListingSchema);

// Export the Listing model
module.exports = Listing;
