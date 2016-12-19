'use strict';

const debug = require('debug')('yakyik: zone-controller');
const Zone = require('../models/zone');
const httpErrors = require('http-errors');

debug('zone-controller');

exports.createZone = function(zoneData){
  debug('createZone');
  return new Promise((resolve, reject) => {
    new Zone(zoneData).save()
    .then( zone => resolve(zone))
    .catch( err => reject(httpErrors(400, err.message)))
  });
};

exports.removeAllZones = function(){
  debug('removeAllZones');

  return Zone.remove({});
};

exports.fetchZoneById = function(zoneId){
  debug('fetchZoneById');

  return new Promise((resolve, reject) => {
    Zone.findOne({_id: zoneId})
    .then( zone => resolve(zone))
    .catch( err => reject(httpErrors(400, err.message)));
  });
};

exports.deleteZone = function(zoneId){
  debug('deleteZone');

  return new Promise((resolve, reject) => {
    Zone.findByIdAndRemove({ _id: zoneId })
    .then( zone => resolve(zone))
    .catch( err => reject(httpErrors(400, err.message)));
  });
};

exports.updateZone = function(zoneId, reqBody){
  debug('updateZone');

  return new Promise((resolve, reject) => {
    Zone.findByIdAndUpdate(zoneId, reqBody)
    .then(() => Zone.findOne({_id: zoneId}))
    .then( zone => resolve(zone))
    .catch( err => reject(httpErrors(400, err.message)));
  });
};
