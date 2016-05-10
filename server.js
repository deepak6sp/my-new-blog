const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser= require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();


//DB setup
mongoose.connect('mongodb://localhost:27017/myblog');


//App setup
app.use(router);
//app.use(express.static(path.join(__dirname))); /* this is to get index.html */
app.use(express.static(path.join(__dirname,"/img")));
app.use(express.static(path.join(__dirname,"/css")));
app.use(express.static(path.join(__dirname,"/public/minifycss")));
app.use(express.static(path.join(__dirname,"/public/minifyjs")));


//router setup
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/index.html'));
});



//Server setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Example app listening on port '+port);

 