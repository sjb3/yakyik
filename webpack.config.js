'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		app: './src/app.js'//where the react code is
	},
	output: {
		filename: 'public/build/bundle.js',
		sourceMapFilename: 'public/build/bundle.map'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
          test: /\.js?/,
          loader: "babel-loader",
          exclude: "/node_modules",
          query: {
              presets: ["react", "es2015"]
          }
      },
      {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['react']
          }
      },
      {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]',
      },
      {
        test: /\.svg.*/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]',
      },
      {
        test: /\.woff.*/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf.*/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]',
      },
      {
        test: /\.eot.*/,
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]',
      }
		]
	}
}
