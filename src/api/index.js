'use strict';

var express = require('express'),
    StockList = require('../models/stock'),
    router = express.Router();


router.get('/stockList', function(req, res){
	StockList.find({}, function(err, stock){
      if(err){
      	// 500 Internal Server Error
      	return res.status(500).json({message: err.message});
      }
      res.json({stock: stock});
	});
});

router.get('/stockList/:id', function (req, res) {
  var id = req.params.id;
    StockList.findById(id, function(err, stock) {
    if(err){
      // 500 Internal Server Error
      return res.status(500).json({message: err.message});
    }
    res.json({stock: stock});
  });
});

router.post('/stockList', function(req, res){
  var stock = req.body;
  StockList.create(stock, function(err, stock){
  	if (err){
  	 return res.status(500).json({err: err.message});
  	} 
    res.json({'stock': stock, message: 'Stock Added'});
  });
});

router.put('/stockList/:id', function(req, res){
  var id = req.params.id;
  var stock = req.body;
  if(stock && stock._id !== id){
  	return res.status(500).json({err: 'Ids don\'t match'});
  }
  StockList.findByIdAndUpdate(id, stock, {new:true}, function(err, stock){
  	if (err){
  	 return res.status(500).json({err: err.message});
  	} 
    res.json({'stock': stock, message: 'Stock Updated'});
  });
});

router.delete('/stockList/:id', function (req, res) {
    var id = req.params.id; // This maps to the :id in the url
    StockList.findByIdAndRemove(id, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ message: 'Deleted Car' });
        }
    });
});

module.exports = router;