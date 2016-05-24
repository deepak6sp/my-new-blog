const mongoose  = require("mongoose");
const Scheme = mongoose.Schema;

const BlogPostSchema = new Scheme({
	title : String,
	content : String,
	updated: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports= BlogPost;