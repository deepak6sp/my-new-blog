//router setup
const path = require('path');
var express = require('express');
var mainRouter = express.Router();

mainRouter.route('/')
.get(function(req,res,next){
	res.sendFile(path.join(__dirname,'../../index.html'));
});

module.exports = mainRouter;