var express = require('express');
var app = express();

app.use(express.static('app'));

var server = app.listen(9000, function() {
	var addr = server.address();

	console.log(addr.address, addr.port);
});
