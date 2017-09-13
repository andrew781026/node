var moment = require('moment');
var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var articleDAO = new Article();


router.get('/', function(req, res) {

    res.render('blog',{
        title:'BLOG TEMPLATE TEST'
    });
});

router.get('/add-Article', function(req, res) {

    var now = new Date();
    var today = moment(now).format('YYYY-MM-DD');

    res.render('blog-add',{
        title:'BLOG TEMPLATE TEST',
        today : today
    });
});

router.get('/add', function(req, res) {

    articleDAO.save( req.query.article ,function (err,r) {
        if ( err ) {
            console.error(err);
            res.status(500).send(err);
        }else {
            console.log(r);
            var response = {
                data : r ,
                redirect : 'view/'+r._id
            };
            res.send(response);
        }
    } );
});

router.get('/view', function(req, res) {

    var content = '在一般程式語言中，Method (或 Function)是否有回傳值都稱作Method，但PL/SQL中根據是否有回傳值將Method分為兩種，Procedure與Function；Procedure為沒回傳值的Method，Function為有回傳值的Method。\n' +
        '\n' +
        '\n' +
        '\n' +
        'ProcedureProcedure就是PL/SQL中的Method，Procedure將的一連串的操作行為包裝，提高重複使用性。\n' +
        '\n' +
        ' Procedure程式語法架構：\n' +
        '\n' +
        ' CREATE OR REPLACE PROCEDURE procedure_name\n' +
        '(       --參數宣告區\n' +
        '        parameter1 MODE DATATYPE [DEFAULT expression],\n' +
        '        parameter2 MODE DATATYPE [DEFAULT expression],\n' +
        '        ...\n' +
        ')\n' +
        'IS\n' +
        '[       --local變數宣告區\n' +
        '        variable1 DATATYPE;\n' +
        '        variable2 DATATYPE;\n' +
        ']\n' +
        'BEGIN\n' +
        '        statements\n' +
        'END;\n' +
        '\n' +
        '在上面語法架構中有幾點需要注意：';

    res.render('blog-view',{
        title:'BLOG TEMPLATE TEST',
        post_title : '关于sqlserver展bom阶的问题' ,
        post_description : '关于sqlserver展bom阶的问题' ,
        post_meta : 'Andrew 於 2017-09-22 發表此文章' ,
        post_content : content
    });
});

router.get('/view/:articleID', function(req, res) {

    var articleID = req.params.articleID;

    if ( 'add-Article' === articleID ){
        res.redirect('../add-Article');
    }

    articleDAO.getByID( articleID , function (err,r) {
        if ( err ){
            res.render('error');
            return ;
        }

        if ( r == null ){
            res.redirect('../');
            return ;
        }

        res.render('blog-view',{
            title:'BLOG TEMPLATE TEST',
            articleID:r._id,
            post_title : r.title ,
            post_description : r.description ,
            post_meta : r.meta ,
            post_content : r.content
        });
    } );

});

router.get('/update', function(req, res) {

    console.log( req.query.article );

    articleDAO.update( req.query.article ,function (err,r) {
        if ( err ) {
            console.error(err);
            res.status(500).send(err);
        }else {
            console.log(r);
            var response = {
                data : r ,
                redirect : '../view/'+r._id
            };
            res.send(response);
        }
    } );
});

router.get('/update/:articleID', function(req, res) {

    var articleID = req.params.articleID;

    if ( 'add-Article' === articleID ){
        res.redirect('../add-Article');
    }

    articleDAO.getByID( articleID , function (err,r) {
        if ( err ){
            res.render('error');
            return ;
        }

        if ( r == null ){
            res.redirect('../');
            return ;
        }

        res.render('blog-update',{
            title:'BLOG TEMPLATE TEST',
            articleID:r._id,
            post_title : r.title ,
            post_description : r.description ,
            post_meta : r.meta ,
            post_content : r.content
        });
    } );

});

router.get('/delete', function(req, res) {

    console.log( req.query.article );

    articleDAO.delete( req.query.article.title , req.query.article.meta ,function (err,r) {
        if ( err ) {
            console.error(err);
            res.status(500).send(err);
        }else {
            console.log(r);
            var response = {
                data : r ,
                redirect : '../'
            };
            res.send(response);
        }
    } );
});

module.exports = router ;