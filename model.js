const mongoose  = require("mongoose");

const BlogPostSchema =new mongoose.Schema({
	id : Number,
	title : String,
	content : String

});

const blogPostsmodel = mongoose.model('blogPosts', BlogPostSchema);
module.exports = blogPostsmodel;