//router setup
var path = require('path');
var bodyParser= require('body-parser');
var express = require('express');
var blogRouter = express.Router();
var myBlogPosts = require("./model");
blogRouter.use(bodyParser.json());

blogRouter.route('/')
.get(function (req, res, next) {
	//console.log("req:");
	//res.end("router added now");
	// res.setHeader("Content-Type", "text/html");
	myBlogPosts.find({},function(err,blogPost){
		if(err) throw err;
		res.json(blogPost);
	});
 	//res.sendFile(path.join(__dirname,'../index.html'));
});

module.exports = blogRouter;
