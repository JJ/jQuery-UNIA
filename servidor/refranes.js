
// variable front page
var fs = require('fs');
var express=require('express');
var app = express();
var refranes_text = fs.readFileSync('refranes.txt','utf8');
var refranes = refranes_text.split("\n");
var portada=fs.readFileSync('refranes.html','utf8');

app.get('/', function (req, res) { 
    res.send(portada);
});

app.get('/js/:page', function (req, res) { 
    var js = fs.readFileSync(req.params.page);
    res.contentType('text/javascript');
    res.send(js);
});

app.get('/css/:page', function (req, res) { 
    var js = fs.readFileSync(req.params.page);
    res.contentType('text/css');
    res.send(js);
});

app.get('/refran', function (req, res) {   
    res.contentType('application/json');
    console.log( refranes.size );
    res.send( { 'refran':  refranes[Math.floor(Math.random()*refranes.length)] } );
});

app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');