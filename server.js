/**
 * Express Module
 */
var express = require('express');
var path = require('path');

var app = express();

/**
 * Load the index.html file on initial load
 */

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.listen(8888);