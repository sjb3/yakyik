'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const CommentSchema = new mongoose.Schema({
  username: {type: String, default:''},
  body: {type: String, default:''},
  timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('CommentSchema', CommentSchema);
