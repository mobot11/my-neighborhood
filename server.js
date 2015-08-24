var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.port || 8080;

app.use('/', express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('', function(req, res) {
  
});



app.listen(app.get('port'), function() {
  console.log('Server started: ' + port);
});
