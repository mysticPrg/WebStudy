/**
 * Created by mysticprg on 15. 1. 9.
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

http.listen(8080, function () {
	console.log('WebStudy Server is Running..');
});
