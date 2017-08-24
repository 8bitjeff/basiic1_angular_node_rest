//demo of returning a single record from an API call
//can be hit with any front-end framework

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

//set the port
app.set('port', 8080);
app.use(express.static(__dirname + '/www'));

//send default page
app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname } );
});

app.get ('/test.html', function(req,res){
  res.send("<h1>Test Page</h1>");
});

app.get('/getrecord', function(req,res){
    console.log("get record called");
    var responseData={"name":"Jeff Fulton", "email":"jeffdfulton@gmail.com", "website":"http://www.8bitrocket.com"};

    res.send(responseData);

});

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
 