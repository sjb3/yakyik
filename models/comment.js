'use strict';

const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  name: {type: String, default''},
  location: {type: [Number]},
  timestamp: {}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);
