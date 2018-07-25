const db = require('../database/models');

module.exports = {
	findAll: function(req, res) {
		db.Listing
			.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
        console.log('hit controller');
        console.log(req);
        console.log('spacerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        console.log(res);
	    db.Listing
	      .create(req.body)
	      .then(dbModel => res.json(dbModel))
	      .catch(err => res.status(422).json(err));
	  }

	// create: function(req, res) {
	// 	console.log('!!!!HERE:CONTROLLERS' + req.body.receiver);
	// 	db.Listing
	// 		.create(req.body)
	// 		.then(function(dbModel) {
	// 			console.log(dbMessage);
	// 			res.json(dbModel)
	// 		})
	// 		.catch(function(err) {
	// 			res.json(err);
	// 		});
	// }
};
