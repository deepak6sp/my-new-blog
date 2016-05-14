var express = require('express');
var bodyParser= require('body-parser');
var path = require('path');
var http = require('http');
var morgan = require('morgan');
var app = express();
var blogRouter = require('./server/router');

//Base Setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myBlog');
 
 
//App setup

//app.use(express.static(path.join(__dirname))); /* this is to get index.html */
app.use(express.static(path.join(__dirname,"/img")));
app.use(express.static(path.join(__dirname,"/css")));
app.use(express.static(path.join(__dirname,"/public/minifycss")));
app.use(express.static(path.join(__dirname,"/public/minifyjs")));

app.use('/',blogRouter);

//Server setup
var port = process.env.PORT || 5000;
var server = http.createServer(app);
server.listen(port);
console.log('Example app listening on port '+port);

 