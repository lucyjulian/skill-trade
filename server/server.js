<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const mongoose = require('mongoose')
const routes = require("./routes")
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const PORT = 8080;
=======
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database') ;
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 8080;
>>>>>>> master
// Route requires
const user = require('./routes/user');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser


// Routes
<<<<<<< HEAD
app.use('/user', user)
//app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

=======
app.use('/user', user);
>>>>>>> master

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});



// 






var mongoose = require("mongoose");

var request = require("request");

var cheerio = require("cheerio");

var db = require("./models");

var PORT = process.env.PORT || 3000;


// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Routes

//Route to home
app.get("/", function(req, res){
    res.render("index");
});


//Route to call listings based on hashtag
app.get("/listings/:tag", function (req, res) {
    db.Listing.find({'hashtags': req.params.tag}, null, { sort: { '_id': -1 } }, function (error, data) {
      if (error) throw error;
      res.send(data);
    });
});

// Route for grabbing a specific profile by id, populate it with it's listings and reviews
app.get("/profiles/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Profile.findOne({ _id: req.params.id })
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
});

// Route for saving/updating an Profiles's number of karmaChips
app.put("/profiles/:id/:chips", function(req, res) {
    
    // Create a new note and pass the req.body to the entry
	db.Profile.findOneAndUpdate({_id: req.params.id}, {$set: { karmaChips: req.params.chips }})
    .then(function(dbProfile) {
		console.log(dbProfile);
		res.send(dbProfile);
	});
});
   
//route to create a new listing and link it to the person's profile
app.post("/listings/:userID", function(req, res) {

	db.Listing.create(req)
	.then(function(dbListing) {
		console.log(dbListing);
	db.Profile.findOneAndUpdate({ _id: req.params.userID }, { $push: { listings: dbListing[1]._id }}, { new: true });
	});
});

//route to delete a listing
app.put("/listings/delete/:id", function(req, res) {
    db.Listing.remove({_id: req.params.id})
    .then(function(data){
        console.log(data);
        res.send(data);
    });
});

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
