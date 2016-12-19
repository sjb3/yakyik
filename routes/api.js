'use strict';

const express = require('express');
const debug = require('debug')('yakyik: api-route');
const bodyParser = require('body-parser').json();
const router = express.Router();
const zoneController = require('../controllers/zone-controller');
const controllers = require('../controllers');
// const zoneRouter = module.exports = new router;

router.get('/:resource/:id', function(req, res, next){
  debug('get /zone/:id');

  var resource = req.params.resource;
  var id = req.params.id;

  if(resource =='zone'){
    zoneController.fetchZoneById(id, function(err, results){
      if(err){
        res.json({
          confirmation: 'failed',
          message : 'Not Found'
        })
      }
      return res.json ({ confirmation: 'success', results: results })
    });
  };
});

  // zoneController.fetchZoneById(id)
  // .then(zone => res.json(zone))
  // .catch(next);
// });
module.exports = router;
