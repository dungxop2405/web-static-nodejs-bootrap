"user strict";

var express = require("express");
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, './public')));

var server = http.createServer(app);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.set('port', process.env.PORT || 8080);
 
server.listen(app.get('port'), function() {
  console.log("Chat bot server listening at %s ", app.get('port'));
});