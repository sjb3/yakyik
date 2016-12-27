'use strict';

var Entry = require('../models/entry');

module.exports = {
	find: function(params, callback){
		Entry.find(params, function(err, entries){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, entries);
		});
	},
	findById: function(id, callback){
		Entry.findById(id, function(err, entry){
			if(err){
				callback(err,null);
				return;
			}
			callback(null,entry);
		});

	},
	create: function(params, callback){
		var zips = params['zipCodes'];
		console.log(zips);
		var zip = zips.split(',');
		console.log(zip);
		var newZips = [];
		zip.forEach(function(zipCode){
			newZips.push(zipCode.trim());
		});

		params['zipCodes'] = newZips;

		Entry.create(params, function(err, entry){
			if(err){
				callback(err,null);
				return;
			}
			callback(null,entry);
		});

	},
	update: function(id, params, callback){
		Entry.findByIdAndUpdate(id, params, {new:true}, function(err, entry){
			if(err){
				callback(err,null);
				return;
			}
			callback(null,entry);
		});
	},
	destroy: function(id, callback){
		Entry.findByIdAndRemove(id, function(err){
			if(err){
				callback(err,null);
				return;
			}
			callback(null,null);
		});
	},
};
