"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
  city: String,
  district: String,
  commune: String,
  street: String,
  desc: String,
  imageUrl:String
}, {
  timestamps: true,
});

productSchema.index({ title: 'text' });
var Posts = mongoose.model('Location', productSchema);
module.exports = Posts;
