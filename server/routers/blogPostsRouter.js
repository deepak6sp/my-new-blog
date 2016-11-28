//router setup
var express = require('express');
var blogPostsRouter = express.Router();
var BlogPost = require("../model/blogPost");
var mongoose = require("mongoose");

blogPostsRouter.route('/blogPostList')
.post(function (req, res, next) {
	BlogPost.create(req.body, function(err, post){
		if (err) throw err;
		var id= post._id;
		res.end();
	});
 })
.get(function(req,res,next){
	BlogPost.find({},function(err,posts){
		if (err) throw err;
		res.json(posts);

	});
});

blogPostsRouter.route('/blogPostList/:slug')
.put(function(req,res,next){

});


blogPostsRouter.route('/search')
.get(function(req, res, next){
	var searchVariable = req.param('searchTerm');
	var regex = new RegExp(searchVariable,"i");
	BlogPost.find(
		{$or:[{"title": regex},{"content":regex}]},function(err,posts){
		if (err) res.send(err);
		res.json(posts);
	});
});

module.exports = blogPostsRouter;
