//router setup
var express = require('express');
var blogPostsRouter = express.Router();
var BlogPost = require("../model/blogPost");

blogPostsRouter.route('/blogPostList')
.post(function (req, res, next) {
	var blogPost = new BlogPost({
		title : 'post4',
		content : 'post4 details'

	});
	blogPost.save(function(err,blogPost){
		if(err) throw console.err(err);
	});
 })
.get(function(req,res,next){
	BlogPost.find(function(err,posts){
		if (err) res.send(err);
		res.json(posts);

	});
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
