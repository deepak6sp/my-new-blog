const mongoose  = require("mongoose");

const BlogPostSchema =new mongoose.Schema({
	title : String,
	slugTitle: String,
	content : String,
	date: { type: Date, default: Date.now }
});

const blogPostsModel = mongoose.model('blogPosts', BlogPostSchema);
module.exports = blogPostsModel;
