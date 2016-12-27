'use strict';

const entryController = require('./entry-controller');
const commentController = require('./comment-controller');

module.exports = {
  comment: commentController,
  entry: entryController,
};
