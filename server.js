const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const app = express();
const mainRouter = require('./server/routers/mainRouter');
const blogPostsRouter = require('./server/routers/blogPostsRouter');

//db Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myBlog');
 
 
//App setup

//app.use(express.static(path.join(__dirname))); /* this is to get index.html */
app.use(express.static(path.join(__dirname,"/img")));
app.use(express.static(path.join(__dirname,"/css")));
app.use(express.static(path.join(__dirname,"/public/minifycss")));
app.use(express.static(path.join(__dirname,"/public/minifyjs")));

app.use('/',mainRouter);
app.use('/api',blogPostsRouter);

//Server setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Example app listening on port '+port);

 