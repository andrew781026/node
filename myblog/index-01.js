/*
* 初始 express 建置
* */

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello, express');
});

app.get('/users/:name',function (req,res) {
   res.send('hello,'+req.param('name'));
});

app.listen(3000,function () {
    console.log('server start at http://localhost:3000');
});

