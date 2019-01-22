var express = require('express');
var app = express();

var  port = process.env.PORT ? process.env.PORT : 8080;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/quote.html');
})

var server = app.listen(port, function(req, res){
	console.log('Express Server started listening at port: ' + port);
});