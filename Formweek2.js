var express = require('express');

var server = express();

server.get('/form', function(req, res){
    res.status(200).send('ok');
});

server.get('/form', function(req,res) {
    console.log(req.query);
    res.status(200).send('this is a post request');
});

    server.listen(8080);
