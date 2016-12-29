'use strict';

const zoneController = require('./zone-controller');
const commentController = require('./comment-controller');

module.exports = {
  comment: commentController,
  zone: zoneController,
};
