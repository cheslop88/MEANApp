'use strict';

var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
  id: Number,
  make: String,
  model: String,
  mileage: Number,
  owners: Number,
  year: Number,
  transmission: String,
  engine: Number,
  image: String,
  price: Number,
  discount: Number,
  sold: Boolean,
  fuel: String,
  colour: String,
  location: String,
  interior: String,
  added: Date
});

var model = mongoose.model('Stock', stockSchema);

module.exports = model;
