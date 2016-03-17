'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stock', function(err){
	if(err) {
		console.log('Failed connecting to Mondodb!');
	} else {
		console.log('Successful mongodb connection');
	}
});
