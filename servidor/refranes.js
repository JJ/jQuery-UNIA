
// variable front page
var fs = require('fs');
var express=require('express');
var app = express.createServer();
var contadores = new Array;
var portada = fs.readFileSync(process.argv[2]+'.html','utf8');

app.get('/', function (req, res) { 
    res.send(portada);
});

app.get('/js/:page', function (req, res) { 
    var js = fs.readFileSync(req.params.page);
    res.contentType('text/javascript');
    res.send(js);
});

app.get('/refran/:', function (req, res) {   
    res.contentType('application/json');
    res.send( { resultado:  contadores[req.params.id] } );
});

app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');