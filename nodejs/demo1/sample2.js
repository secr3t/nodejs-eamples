var http = require('http');

var server = http.createServer(function(req, res){

	res.end("Hello nodeJs!!!");
});

server.listen(3000);