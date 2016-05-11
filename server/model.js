const mongoose  = require("mongoose");

const MyBlogSchema = mongoose.Schema({
	id : Number,
	title : String,
	content : String

});

module.exports = mongoose.model('MyBlogPost', MyBlogSchema);