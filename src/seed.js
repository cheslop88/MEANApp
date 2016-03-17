'use strict';

var StockList = require('./models/stock');

var stock = [
   "Boxster S",
   "Cayman"
];

stock.forEach(function(stock, index){
  StockList.find({'model': stock}, function(err, stock){
    if(!err && !stock.length) {
	      StockList.create({ 
	      	"id": 0,
	    	"make": "Porsche",
	    	"model": "Boxster S",
	    	"mileage": 2000,
	    	"owners": 1,
	    	"year": 2012,
	    	"transmission": "Semi-automatic",
	    	"engine": 3.4,
	    	"image": "images/porsche_boxster_white_2013.jpg",
	    	"price": 31500,
	    	"discount": 3400,
	    	"sale": true,
	    	"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
	    	"fuel": "Petrol",
	    	"colour": "Racing White",
	    	"location": "London, United Kingdom",
	    	"interior": "Full Leather",
	    	"message": "Just Arrived!"})
	    };
  });
});