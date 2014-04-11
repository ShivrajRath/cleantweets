/**
 * Express Module
 */
var express = require('express');

var app = express();

/**
 * Load the index.html file on initial load
 */

app.get('/', function(req,res){
 res.sendfile(__dirname + '/public/index.html');
}); 

app.listen(3000);