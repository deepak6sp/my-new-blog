var express = require('express');
var path = require('path');
var http = require('http');
var morgan = require('morgan');
var app = express();
var blogRouter = require('./server/router.js');
var db = require('./server/database');

db.once("open",function(){
	console.log("connected to mongodb");
});


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

 