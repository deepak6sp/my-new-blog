var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 5000;


//app.use(express.static(path.join(__dirname))); /* this is to get index.html */
/*
app.use(express.static(path.join(__dirname,"/img")));
app.use(express.static(path.join(__dirname,"/css")));
app.use(express.static(path.join(__dirname,"/public/minifycss")));
app.use(express.static(path.join(__dirname,"/public/minifyjs")));
*/
  


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(port, function () {
  console.log('Example app listening on port '+port);
}); 
 