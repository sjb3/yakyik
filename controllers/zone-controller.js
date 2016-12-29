'use strict';

var Zone = require('../models/zone');

module.exports = {
	find: function(params, callback){
		Zone.find(params, function(err, Zones){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, Zones);
		});
	},
	findById: function(id, callback){
		Zone.findById(id, function(err, zone){
			if(err){
				callback(err,null);
				return;
			}
			callback(null, zone);
		});

	},
	create: function(params, callback){
		// var zips = params['zipCodes'];
		// console.log(zips);
		// var zip = zips.split(',');
		// console.log(zip);
		// var newZips = [];
		// zip.forEach(function(zipCode){
		// 	newZips.push(zipCode.trim());
		// });
		//
		// params['zipCodes'] = newZips;

		Zone.create(params, function(err, zone){
			if(err){
				callback(err,null);
				return;
			}
			callback(null,zone);
		});

	},
	update: function(id, params, callback){
		Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
			if(err){
				callback(err,null);
				return;
			}
			callback(null,zone);
		});
	},
	destroy: function(id, callback){
		Zone.findByIdAndRemove(id, function(err){
			if(err){
				callback(err,null);
				return;
			}
			callback(null,null);
		});
	},
};
