"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category_beds: {
    type: Schema.Types.ObjectId,
    ref: 'Beds',
    required: true
    },
  category_filters: {
    type: Schema.Types.ObjectId,
    ref: 'Filters',
    required: true
    },
  category_includeds: {
    type: Schema.Types.ObjectId,
    ref: 'Includeds',
    required: true
    },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  desc: String,
}, {
  timestamps: true,
});

itemsSchema.index({ name: 'text' });
var Items = mongoose.model('Items_Post', itemsSchema);
module.exports = Items;
