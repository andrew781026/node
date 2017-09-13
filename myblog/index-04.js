/*
* 加上 articleDAO
* */

var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var articleRouter = require('./routes/article');
var blogRouter = require('./routes/blog');
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/article', articleRouter);
app.use('/blog', blogRouter);

app.listen(port,function () {
    console.log('server start at http://localhost:'+port);
});