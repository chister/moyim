var restaurantSchema = require('../models/Restaurant').Restaurant;
var mongoose = require('mongoose'),
	Restaurant = mongoose.model('Restaurant');

/*
 * GET home page.
 */

exports.index = function(req, res){
	/*
	var mcds = new Restaurant({name: 'McDonalds'});
	mcds.save(function(err) {
		if (err) console.log('there was an error');
	});
	*/
	res.locals({ title: 'Express' })
	res.render('index');
};

exports.inputRestaurant = function(req, res) {
	res.render('restaurantForm');
};

exports.saveRestaurant = function(req, res) {
	console.log(req.body);
	var restaurant = new Restaurant(req.body);

	restaurant.save(function(err) {
		if (err) console.log('there was an error saving ' + err);
		console.log('saved restaurant ' + JSON.stringify(req.body));
	});

	res.render('restaurantForm');
}

exports.listRestaurants = function(req, res) {
	Restaurant.find({}).exec(function(err, list) {
		list.forEach(function(item) {
			console.log(item);
		});
		res.locals({ list: list})
		res.render('listRestaurants');
	});
}