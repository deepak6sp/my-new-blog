var express = require('express');
var path = require('path');
var app = express();


//app.use(express.static(path.join(__dirname))); /* this is to get index.html */
app.use(express.static(path.join(__dirname,"/img")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

  


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/index.html'));
});


app.listen(5000, function () {
  console.log('Example app listening on port 7000!');
});
