'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const zoneSchema = new mongoose.Schema({
  name: {type: String, default: ''},
  zipCodes: {type: Array, default: []},
  timestamp: {type: Date, default: Date.now}
});

// module.exports = mongoose.model('ZoneSchema', ZoneSchema);
const Zone = module.exports = mongoose.model('zone', zoneSchema);
// some validation that the records have to be filled
// Zone.schema.path('records').validate(function(value){
//   if(value.length < 1) return false;
//   return true;
// });
