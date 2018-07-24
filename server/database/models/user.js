const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
	username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },

	firstName: {
		type: String,
		required: false
	},
	  // `link` is required and of type String
	lastName: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	imageLink: {
		type: String,
		required: false
	},
	birthdate: {
		type: Date,
		required: false
	},
	dateJoined: {
		type: Date,
		required: false
	},
	karmaChips: {
		type: Number,
		required: false
	},
	listings: [{
		type: Schema.Types.ObjectId,
		ref: "Listing"
	}],
  	message: {
		type: [{type: Schema.Types.ObjectId, ref: "Messages"}]
	},
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: "Review"
	}]

});

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

// Define pre hooks for the save method
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======');
		next();
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password);
		next();
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;