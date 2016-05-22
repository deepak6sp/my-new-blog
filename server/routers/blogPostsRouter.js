//router setup
var express = require('express');
var blogPostsRouter = express.Router();
var BlogPost = require("../model/blogPost");

blogPostsRouter.route('/blogPostList')
// .post(function (req, res, next) {
// 	var blogPost = new BlogPost({
// 		id : '1',
// 		title : 'post1',
// 		content : 'post1 details'

// 	});
// 	blogPost.save(function(err,blogPost){
// 		if(err) throw console.err(err);
// 	});
//  })
.get(function(req,res,next){
	BlogPost.find(function(err,posts){
		if (err) res.send(err);
		res.json(posts);

	});
});


blogPostsRouter.route('/search')
.get(function(req, res, next){
	var regex = new RegExp("post1","i");
	BlogPost.find(
		{$or:[{"title": regex},{"content":regex}]},function(err,posts){
		if (err) res.send(err);
		res.json(posts);
		console.log("search router");

	});
});

module.exports = blogPostsRouter;
