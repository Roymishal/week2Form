var express = require('express')

var server = express()

server.use('/',express.static(_dirname));

server.get('/form', function(req, set){
{
    res.status(200), send(ok);
});

server.listen(8080);
