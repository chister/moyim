var mongoose = require('mongoose');

var Restaurant = new mongoose.Schema({
	name: String,
	type1: String,
	type2: String,
	type3: String,
	location: String,
	neighborhood: String,
	pricePoint: String,
	michelinRating: String,
	nyTimesRating: String,
	myRating: String,
	comments: String
});

mongoose.model('Restaurant', Restaurant);