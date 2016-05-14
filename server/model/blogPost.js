const mongoose  = require("mongoose");
const Scheme = mongoose.Schema;

const BlogPostSchema = new Scheme({
	id : Number,
	title : String,
	content : String

});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports= BlogPost;