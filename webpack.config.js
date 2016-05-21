var webpack = require("webpack");
var paths = require("path");
var node_mod = __dirname + '/node_modules'

var config = {
  entry: {
    app:"./app/main.js"
  },
  output: {
  	path: paths.join(__dirname, '/public/minifyjs/'),
    filename: "bundle.js"
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //   	minimize: true,
  //   	compress: {
  //   		warnings:false
  //   	}
  //   })
  // ],
  module: {
    loaders: [
      { 
      	test: /\.js$/,
      	include: [
  	        paths.resolve(__dirname, "app"),
  	    ],
        "exclude": /node_modules/,
        loader: ['babel-loader'],
  	    query:{
  	    	presets:['es2015','react']
  	    }
      }
    ]
  },
  resolve:{
  	extensions: ['','.js'],
    moduleDirectories : ['./app']
  },
   devtool: "sourcemap",
    debug: true
};

module.exports = config;