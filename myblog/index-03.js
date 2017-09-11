/*
* 加上模板引擎(ejs)
* */

var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var articleRouter = require('./routes/article');
var blogRouter = require('./routes/blog');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/article', articleRouter);
app.use('/blog', blogRouter);

app.listen(5000,function () {
    console.log('server start at http://localhost:5000');
});